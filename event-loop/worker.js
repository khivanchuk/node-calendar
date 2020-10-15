const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

function fibonacci(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
        arr.push(arr[i - 2] + arr[i -1])
    }
    return {input:n, output: arr[n]};
}

if (isMainThread) {
    let value_to_calc = 100;
    let worker = new Worker(__filename, { workerData: { value: value_to_calc }});

    worker.on('error', (err) => { throw err; });
    worker.on('exit', () => {
        console.log('Thread exiting');
    })
    worker.on('message', (msg) => {
        console.log(msg);
    });

} else {
    let result = fibonacci(workerData.value);
    parentPort.postMessage(result);
}
