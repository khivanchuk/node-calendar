setTimeout(() => console.log('T'),0);
process.nextTick(() => console.log('next tick1'));
global.queueMicrotask(() => console.log('queueM'));
process.nextTick(() => console.log('next tick2'));
Promise.resolve().then(() => console.log('nextP'));
console.log('simple log');
