// requiring the necessary libraries and modules
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');  // Used for session cookie
const passport = require('passport');
const passportLocal = require('./config/passport_local');
const { collection } = require('./models/userSchema');
const MongoStore = require('connect-mongo');

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

// Setting up the EJS view engine 
app.set('view engine', 'ejs');
app.set('views', './views'); // The http requests will be routed to the 'views' directory wherein all the pages and subpages are stored

// Mongo store is used to store the session cookie in the DB
const store = MongoStore.create({
    mongoUrl: 'mongodb+srv://msheshant1997:Sheshant123@cluster0.vhl81py.mongodb.net/?retryWrites=true&w=majority',
    autoRemove: 'interval',
    autoRemoveInterval: 10,
    collection: 'sign-in-session'
});

// In case, the connection to MongoDB fails to establish,...
store.on('error', (error)=> {
    console.log('Error connecting to MongoDB ', error);
});

app.use(session({
    name: 'codeial',
    // Todo: change the below secret before deployment in the production mode
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 100
    },
    store: store
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);


// Use express router
app.use('/', require('./routes/index')) // We can omit /index after ./routes because by default, the require() fetches index.js

// Setting up the express server at localhost(127.0.0.1 and port:8000)
app.listen(port, url, (error)=>{
    if(error){
        console.log(error);
    }
    console.log(`Server is running at ${url}:${port}`);
});