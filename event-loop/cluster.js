const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    for (let i = 0; i < 6; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    let workers = [];
    http.createServer((req, res) => {
        console.log('New incoming request');
        let worker = workers.find(w => w.id === process.pid);
        worker.count ++;
        res.writeHeader(200, {'Content-Type': 'application/json'});
        res.end(`Hello from ${process.pid}\nCount ${worker.count}\n`);
    }).listen(3000);

    workers.push({id: process.pid, count: 0});
    console.log(`Worker ${process.pid} started`);
    console.log(workers);
}
