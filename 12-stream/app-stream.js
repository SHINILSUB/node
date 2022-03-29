
const readStream = createReadstream(./file.txt, {})
    
    const data = []
    readStream.on('data', (chunk) => {
    data.push(chunk)})
    
    readStream.on('end' ()=>{
    console.log(data.join(''))})