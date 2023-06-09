The name of this project is simply the portmanteau of two words: Codeial = Code + Social. It is a scalable and well structured social web app developed based on the Model View and Controller (MVC) architecture.

Let's get started with the Project:
    
    Create folder Codeial
    Create file: index.js

    Now, open a new terminal and run:
     npm init

    package name: (codeial)
    version: (1.0.0)
    description: Code + Social = Codeial, A social media platform for coders.
    entry point: (index.js)
    test command:
    git repository:
    keywords:
    author: Sheshant Manure
    license: (ISC)

    Then, create folders using the terminal:
        mkdir assets, config, controllers, models, routes, views

    Install using terminal:
    npm install nodemon
    npm install express
    npm install ejs
    npm install express-ejs-layouts
    npm install mongoose
    npm install cookie-parser
    npm install passport
    npm install passport-local
    npm install express-session
    npm install connect-mongo

    Open package.json and add the following to the "scripts"
     "start": "nodemon index.js",

    Note:
    The naming convention for a partials html template ejs file is that it should begin with an underscore.
    e.g, _header.ejs is a partial in the views folder that is included in home.ejs file to work as header.

Tech Stack:
    1. NodeJS
    2. Express
    3. EJS
    4. MongoDB

Libraries: 
    1. Mongoose
    2. Passport
    3. Passport-local // Authentication strategy
    4. Nodemon
    5. Cookie-parser
    6. Connect-mongo
    7. Express-session

Frontend: 
    1. Express-ejs-layouts
        partials and layouts