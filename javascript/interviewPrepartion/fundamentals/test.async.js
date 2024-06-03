
setImmediate(() => console.log('b'), 1);
setTimeout(() => console.log('a'), 0);
process.nextTick(() => console.log('c'));
console.log('d');