const express = require('express');

const app = express();
const url = '127.0.0.1';
const port = 8000;

// Use express router
app.use('/', require('./routes/index')) // We can omit /index after ./routes because by default, the require() fetches index.js

app.listen(port, url, (error)=>{
    if(error){
        console.log(error);
    }
    console.log(`Server is running at ${url}:${port}`);
});