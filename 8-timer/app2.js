console.log('code1');
console.time('timeout 0')
setTimeout(()=>{
    console.log('set T0');
    console.timeEnd('timeout 0')
}, 0);

console.log('code2');
setImmediate(()=>{
    console.log('set immdat');
});
console.log('code3');
process.nextTick(()=>{
    console.log('nxtTick');
})