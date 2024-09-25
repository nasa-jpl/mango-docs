---
sidebar_position: 1
---

# Access & Accounts

## Groups

<table>
  <th>
    LDAP Group
  </th>
  <th>
    Description
  </th>
  <th>
    Used for
  </th>
  <tr>
    <td>
      <code>mango.dev</code>
    </td>
    <td>
      MANGO development team
    </td>
    <td>
      <ul padding="15px">
        <li>Access to Artifactory project space</li>
        <li>Service account management</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <code>mango.users</code>
    </td>
    <td>
      MANGO UI users
    </td>
    <td>
      <ul padding="15px">
        <li>Access to MANGO UI</li>
      </ul>
    </td>
  </tr>
</table>

Reach out to Marjorie Lucas [marjorie.j.lucas@jpl.nasa.gov] to be added to either of these groups.


## Resources

| Resource | Used for | Access |
| ---- | ----- | ----- |
| <a href="">Jenkins</a> | CI | POC: Nga Chung |
| <a href="">Artifactory</a> | Artifact repository | `mango.dev`
| `mass-change-viz` | Deployment server | POC: Nga Chung


## Service Accounts

| Username | Description | Admin
| ---- | --- | ----- |
| `mango-ci` | Used within the CI to push artifacts to Artifactory | `mango.dev` |


