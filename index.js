const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// Defining the localhost url and port #
const url = '127.0.0.1';
const port = 8000;

// Setting the directory for static files (CSS, JS and Images) named as 'assets'
app.use(express.static('./assets'));

// Extract the styles and scripts from subpages into the layout page
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Using express ejs layouts library
// This must be executed before the routes so that before rendering pages from the views, a layout is predefined for all of them
app.use(expressLayouts);

// Use express router
app.use('/', require('./routes/index')) // We can omit /index after ./routes because by default, the require() fetches index.js

// Setting up the EJS view engine 
app.set('view engine', 'ejs');
app.set('views', './views'); 

app.listen(port, url, (error)=>{
    if(error){
        console.log(error);
    }
    console.log(`Server is running at ${url}:${port}`);
});