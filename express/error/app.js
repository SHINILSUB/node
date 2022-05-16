import { Express } from "express";
import fs from "fs";
import fsAsync from "fs/promises"

const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
    try {
        const data = fs.readFileSync('/file.txt');
    } catch (error) {
        res.status(404).send('File not found')
    }
});

app.get('/file2', (req, res) => {
    fs.readFile('/file.txt', (err, data)=>{
        if(err){
            res.status(404).send('file not found')
        }
    });
});

app.get('/file3', (req, res, next) => {
    const data = await fsAsync.readFile('/file.txt')
    .catch(next);
});

app.get('/file3', async (req, res) => {
    try{
        const data = await fsAsync.readFile('/file.txt')
    } catch (error){
        res.status(404).send('file not found')
    }    
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message: 'something went wrong' })
})
