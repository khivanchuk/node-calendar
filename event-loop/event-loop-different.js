const fs = require('fs');

setTimeout(function A (){
    console.log('timeout 1 called!!!');
    process.nextTick(function E (){
        console.log('tick 1 called');
    })
}, 0);
fs.readFile(`${__dirname}/text-file.txt`, 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data)
});
setTimeout(function E (){
    console.log('timeout 2 called!!!');
    process.nextTick(function E (){
        console.log('tick 2 called');
    })
}, 0);
setImmediate(function immediate() {
    console.log("immediate 1 called!!!");
});
