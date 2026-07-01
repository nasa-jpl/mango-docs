[![.github/workflows/build.yml](https://github.com/nasa-jpl/mango-docs/actions/workflows/build.yml/badge.svg)](https://github.com/nasa-jpl/mango-docs/actions/workflows/build.yml)

# Monitoring and ANalysis for Gravity Operations (MANGO) Docs

User documentation for the MANGO Web UI.

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm i
```

### Create certificates

Create a self-signed certificate for local development.

```
brew install mkcert
mkdir -p .cert && mkcert -key-file ./.cert/key.pem -cert-file ./.cert/cert.pem 'localhost'
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server. Note: for the search feature to work you will have to run in production mode.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Production

```
$ node server.js
```

This will start the node express server, which will serve the contents of the `build` directory over SSL. The default port is `3000`.

### Build & run image

Run the following commands from the repo root to build the image and run the container locally:

```
$ podman build -t mango-docs .

$ podman run -d --restart unless-stopped --name mango-docs -p 3000:3000 -v $KEY_PATH:/app/.cert/key.pem -v $CERT_PATH$:/app/.cert/cert.pem -e MANGO_HOST_URL=${MANGO_HOST_URL} mango-docs
```

