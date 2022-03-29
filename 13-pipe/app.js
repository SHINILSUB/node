const fs = require('fs')

const readStream = fs.createReadStream(./file.txt)
const writeStream = fs.createWriteStreasm(./file4.txt)
const piping = readStream.piping(writeStream)

piping.on('finish'()=>{
console.log('done')})