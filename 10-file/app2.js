const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf8')
.then((data) => console.log(data) )
.catch(console.error);

fs.writeFile('./file.txt', 'hello hello')
.catch(console.error);

fs.appendFile('./file.txt', 'man')
.then(()=>{
    fs.copyFile('./file.txt', './file2.txt')
    .catch(console.error)
    
})
.catch(console.error)


