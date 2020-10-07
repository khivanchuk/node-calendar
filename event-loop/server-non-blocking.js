const http = require('http');
const { spawn } = require('child_process');

http.createServer((req, res) => {
    console.log('New incoming request');
    res.writeHeader(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Hello world!'}));
    
    const child = spawn('node', ['./blocker.js'], {
        detached: true,
        stdio: 'ignore'
      });
      
    child.unref();

}).listen(3000, () => {
    console.log('Listening on port 3000');
});
