const express = require('express');
// const router = express.Router();
const app = express();
const url = '127.0.0.1';
const port = 8000;

// const path = require('path');

app.listen(port, url, (error)=>{
    if(error){
        console.log(error);
    }
    console.log(`Server is running at ${url}:${port}`);
});