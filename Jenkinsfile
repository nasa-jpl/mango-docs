pipeline {
  agent {
    label 'cae-linux-build'
  }

  tools {
    nodejs 'node20'
  }

  environment {
    DOCKER_IMAGE_NAME = 'mango-docs'
    // ARTIFACTORY_URL = "${params.ARTIFACTORY_URL}"
    // ARTIFACTORY_REPO = "${params.ARTIFACTORY_REPO}"
  }

  options {
    // The buildDiscarder settings limit how long job run histories remain.
    buildDiscarder logRotator(
      daysToKeepStr: '90',
      numToKeepStr: '45',
    )
  }

  stages {
    stage('Installation') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Read Config into env') {
      steps {
        script {
          configFileProvider([configFile(fileId: "b3f34083-3069-406d-9ce6-de67213c1b27", variable: 'configFile')]) {
            def props = readProperties file: "$configFile"
            def ARTIFACTORY_URL = props['ARTIFACTORY_URL']
            sh "print ${ARTIFACTORY_URL}"
          }
        }
      }
    }

    stage('Build Docs') {
      steps {
        script {
            def build = sh(script: 'npm run build', returnStdout: true, returnStatus: true)
            if (build == 0) {
                publishChecks name: 'build', title: 'Build Docs', summary: 'Check build output', text: "build process returned status code: ${build}", conclusion: 'SUCCESS', status: 'COMPLETED'
            } else {
                publishChecks name: 'build', title: 'Build Docs', summary: 'Check build output', text: "build process returned status code: ${build}", conclusion: 'FAILURE', status: 'COMPLETED'
            }
        }
      }
    }

    stage('Build Docker Image') {
      when {
        allOf {
          anyOf {
            // Trigger docker builds off develop, main, or tags
            branch 'develop'
            branch 'main'
            tag '*'
          }
          expression {
            currentBuild.currentResult == 'SUCCESS'
          }
        }
      }
      steps {
          script {
              DOCKER_IMAGE_VERSION = env.GIT_BRANCH.replaceAll('/', '_')
              ARTIFACTORY_TAG = "${params.ARTIFACTORY_URL}/${params.ARTIFACTORY_REPO}/${env.DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_VERSION}"
              docker.build("${ARTIFACTORY_TAG}", '-f Dockerfile .')
          }
      }
    }

    stage('Deploy to Artifactory') {
      when {
        allOf {
          anyOf {
            // Trigger push to Artifactory off develop, main, or tags
            branch 'develop'
            branch 'main'
            tag '*'
          }
          expression {
            currentBuild.currentResult == 'SUCCESS'
          }
        }
      }
      steps {
        script {
          withCredentials([usernamePassword(credentialsId: 'artifactory-credentials', usernameVariable: 'ARTIFACTORY_USER', passwordVariable: 'ARTIFACTORY_PASSWORD')]) {
            sh "print ${params.ARTIFACTORY_URL}"
            sh "docker login -u ${ARTIFACTORY_USER} -p ${ARTIFACTORY_PASSWORD} ${params.ARTIFACTORY_URL}"
            // sh "docker push ${ARTIFACTORY_TAG}"
          }
        }
      }
    }
  }
  post {
    always {
      cleanWs()
    }
  }
}
