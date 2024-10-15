const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');

const PORT = 3000;
const BASE_URL = '/mango/docs'

const sslKey = fs.readFileSync(path.resolve(__dirname, './.cert/key.pem'));
const sslCert = fs.readFileSync(path.resolve(__dirname, './.cert/cert.pem'));

const app = express();

app.use(BASE_URL, express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const httpsServer = https.createServer({
  key: sslKey,
  cert: sslCert
}, app);

httpsServer.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});