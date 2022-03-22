const process = require('process');


setTimeout(()=>{
    console.log("settime")});
    
    process.nextThick(()=>{
    console.log("nxtthck")})
    
    for(let i =0; i < 100; i++){
    console.log("for loop")}
    