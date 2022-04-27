import express from "express";
const app = express();

app.get('/sky/id', (req,res,next)=>{
    console.log('get');
    // console.log(req.path);
    // console.log(req.headers);
    console.log(req.params);
    console.log(req.query);
    console.log(req.query.keyword)
    res.send('what?')
})
app.listen(8080);

