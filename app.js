const http = require('http');
const config = require('./config');
const logger = require('./logger');

const env = config.config.ENV;
const port = config.config.PORT;

http.createServer((req, res) => {
    console.log('New incoming request');
    res.writeHeader(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Hello world!'}));
}).listen(port, () => {
    console.log(`Current environment: ${env}`);
    console.log(`Listening on port ${port}`);
});
