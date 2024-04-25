---
sidebar_position: 2
---

# CI & Deployment
Jenkins is used for the project CI. Pipelines have been configured to run tests, build images, and push artifacts to artifactory. Deployments to the dev server are not automated in Jenkins. MANGO services need to be deployed manually on their respective hosts. See projects' `Jenkinsfile` for specifics.

## Documentation
Documentation was generated using Docusaurus.

<table>
  <tr>
    <td>GitHub Repo</td>
    <td><a href="***REMOVED***">mango-docs</a></td>
  </tr>
  <tr>
    <td>Jenkins CI Pipeline</td>
    <td><a href="***REMOVED***/job/docs/">cae-jenkins2.jpl.nasa.gov/job/Mass-Change-Viz/job/docs</a></td>
  </tr>
  <tr>
    <td>Artifactory</td>
    <td><a href="***REMOVED***/mango-docs">***REMOVED***</a></td>
  </tr>
  <tr>
    <td>Deployed to</td>
    <td><code>mass-change-viz</code> port <code>3000</code></td>
  </tr>
</table>

See deployment instructions on `sdeploy@mass-change-viz:~/mango_docs/DEPLOY.md`.

## Web UI
This is the MANGO frontend.

<table>
  <tr>
    <td>GitHub Repo</td>
    <td><a href="***REMOVED***">mango-ui</a></td>
  </tr>
  <tr>
    <td>Jenkins CI Pipeline</td>
    <td><a href="***REMOVED***/job/ui/">cae-jenkins2.jpl.nasa.gov/job/Mass-Change-Viz/job/ui</a></td>
  </tr>
  <tr>
    <td>Artifactory</td>
    <td><a href="***REMOVED***/mango-ui">***REMOVED***</a></td>
  </tr>
  <tr>
    <td>Deployed to</td>
    <td><code>mass-change-viz</code> port <code>5174</code></td>
  </tr>
</table>

See deployment instructions on `sdeploy@mass-change-viz:~/mango_ui/DEPLOY.md`.

## Backend
