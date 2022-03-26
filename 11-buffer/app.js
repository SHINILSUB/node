//chunk of memory
//array of integars

const buf = Buffer.from('hi')
console.log(buf);
console.log(buf.length);
//ascii
console.log(buf[0]);
console.log(buf[1]);
//str
console.log(buf.toString());

//create 초기화안하는대신 빠른 
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2);
console.log(buf2);
console.log(buf3);
//insert
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3)
console.log(buf2.toString());
console.log(buf3);

//concat
const newBuf = Buffer.concat([buf,buf2, buf3]);
console.log(newBuf.toString());

