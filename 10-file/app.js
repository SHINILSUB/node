const fs = require('fs');
try{
fs.renameSync('./text.txt', './text-new.txt');
} catch(error) {
console.error(error)
}
console.log('hello');

fs.rename('./text-new.txt', './text.txt', (error)=>{console.log(error);})
console.log('hello2');


fs.promises.rename('./text.txt', './text-new.txt')
.then(()=>console.log('Done'))
.catch(console.error)