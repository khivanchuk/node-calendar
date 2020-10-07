const http = require('http');

function sendRequest() {
    http.get('http://localhost:3000', (resp) => {

    resp.on('data', (data) => {
        console.log(data.toString());
    });

    }).on('error', (err) => {
        console.log(err);
    });
}

setTimeout(() => {  
    let i = 0;
    while (i < 100) {
        sendRequest();
        i++;
    }
}, 0);
