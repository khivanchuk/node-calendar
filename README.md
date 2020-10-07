# node-calendar

This repository includes code for Node.js course

## Homework 1 - Node.js use cases

```
PORT=3000 node app.js -env=dev

Current environment: dev
Listening on port 3000
```

## Homework 2 - Node.js Event Loop. Workers

All code is located in 'event-loop' folder.

All files with 'presentation' prefix include code from presentation, no need to review.

1. Code, that may behave differently on different runs

    run:
    ```
    node event-loop-different.js

    timeout 1 called!!!
    tick 1 called
    timeout 2 called!!!
    tick 2 called
    immediate 1 called!!!
    Some data from text file!

    node event-loop-different.js

    immediate 1 called!!!
    timeout 1 called!!!
    tick 1 called
    timeout 2 called!!!
    tick 2 called
    Some data from text file!
    ```

2. Code, that blocks server

    run:
    ```
    node server-blocking.js

    Listening on port 3000
    ```

    in another terminal tab, run:
    ```
    curl http://localhost:3000

    {"message":"Hello world!"}
    ```
    Other attempts to curl localhost:3000 should not return any messages.

3. Unblocking server

    run:
    ```
    node server-non-blocking.js 

    Listening on port 3000
    ```

    in another terminal tab, run:
    ```
    curl http://localhost:3000
    
    {"message":"Hello world!"}
    ```
    All attempts to curl localhost:3000 should return the same messages immediately.

4. Cluster with workers

    run:
    ```
    node cluster.js

    Master 6928 is running
    Worker 6929 started
    Worker 6930 started
    Worker 6931 started
    Worker 6932 started
    Worker 6934 started
    Worker 6933 started
    ```

    in another terminal tab, run:
    ```
    node call-cluster.js 
    
    Hello from 6929
    Count 15

    Hello from 6930
    Count 17

    Hello from 6933
    Count 17

    Hello from 6934
    Count 17

    Hello from 6931
    Count 18

    Hello from 6932
    Count 16
    ```
    Since the script above makes 100 calls to server, you should get a message per call, where count is incrementing from 1 to some number.

5. Fibonacci number on worker thread

    run:
    ```
    node worker.js
    
    { input: 100, output: 354224848179262000000 }
    Thread exiting
    ```
