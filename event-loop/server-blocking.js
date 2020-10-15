const http = require('http');

function blockServer(num) {
    let i = 0;
    while (i < num) {
        console.log(`${i} - blocking server `);
        i++;
    }
}

http.createServer((req, res) => {
    console.log('New incoming request');
    res.writeHeader(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Hello world!'}));
    blockServer(1000000);
}).listen(3000, () => {
    console.log('Listening on port 3000');
});
