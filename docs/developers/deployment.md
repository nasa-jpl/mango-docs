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
    <td><a href="***REMOVED***/mango-docs">mango-docs</a></td>
  </tr>
  <tr>
    <td>Jenkins CI Pipeline</td>
    <td><a href="https://***REMOVED***/">***REMOVED***</a></td>
  </tr>
  <tr>
    <td>Artifactory</td>
    <td><a href="https://***REMOVED***/ui/repos/tree/General/docker-develop-local/***REMOVED***/mango-docs">***REMOVED***/ui/repos/tree/General/docker-develop-local/***REMOVED***/mango-docs</a></td>
  </tr>
  <tr>
    <td>Deployed to</td>
    <td><code>mass-change-viz</code> port <code>3000</code></td>
  </tr>
</table>

See deployment instructions on `***REMOVED***:~/mango_docs/DEPLOY.md`.

## Web UI
This is the MANGO frontend.

<table>
  <tr>
    <td>GitHub Repo</td>
    <td><a href="***REMOVED***/mango-ui">mango-ui</a></td>
  </tr>
  <tr>
    <td>Jenkins CI Pipeline</td>
    <td><a href="https://***REMOVED***/">***REMOVED***</a></td>
  </tr>
  <tr>
    <td>Artifactory</td>
    <td><a href="https://***REMOVED***/ui/repos/tree/General/docker-develop-local/***REMOVED***/mango-ui">***REMOVED***/ui/repos/tree/General/docker-develop-local/***REMOVED***/mango-ui</a></td>
  </tr>
  <tr>
    <td>Deployed to</td>
    <td><code>mass-change-viz</code> port <code>5174</code></td>
  </tr>
</table>

See deployment instructions on `***REMOVED***:~/mango_ui/DEPLOY.md`.

## Backend

TODO
