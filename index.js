// requiring the necessary libraries and modules
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');

// Defining the localhost url and port #
const url = '127.0.0.1';
const port = 8000;

const app = express();
// Setting the directory for static files (CSS, JS and Images) named as 'assets'
app.use(express.static('./assets'));

// When we submit the form from a page, the data is send via post method and therefore the form data can be encoded in the url by using the below middleware
app.use(express.urlencoded({ extended: true }));
// Setting the cookie parser middleware
app.use(cookieParser());

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
app.set('views', './views'); // The http requests will be routed to the 'views' directory wherein all the pages and subpages are stored


// Setting up the express server at localhost(127.0.0.1 and port:8000)
app.listen(port, url, (error)=>{
    if(error){
        console.log(error);
    }
    console.log(`Server is running at ${url}:${port}`);
});