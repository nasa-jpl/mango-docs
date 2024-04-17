pipeline {
  agent {
    label 'cae-linux-build'
  }

  tools {
    nodejs 'node20'
  }

  environment {
    DOCKER_IMAGE_NAME = 'gmat-ci'
    ARTIFACTORY_URL = '***REMOVED***'
    ARTIFACTORY_REPO = 'gov/nasa/jpl/gracec/gmat'
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

    stage('Build Docs') {
      steps {
        script {
            def build = sh(script: 'yarn run build --force', returnStdout: true, returnStatus: true)
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
            branch 'feature/52/docs-ci'
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
              ARTIFACTORY_TAG = "${env.ARTIFACTORY_URL}/${env.ARTIFACTORY_REPO}/${env.DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_VERSION}"
              docker.build("${ARTIFACTORY_TAG}", '-f Dockerfile .')
          }
      }
    }

    stage('Deploy to Artifactory') {
      when {
        allOf {
          anyOf {
            // Trigger push to Artifactory off develop, main, or tags
            branch 'feature/52/docs-ci'
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
            sh "docker login -u ${ARTIFACTORY_USER} -p ${ARTIFACTORY_PASSWORD} ${ARTIFACTORY_URL}"
            sh "docker push ${ARTIFACTORY_TAG}"
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
