The name of this project is simply the portmanteau of two words: Codeial = Code + Social. It is a scalable and well structured social web app developed using the following:
1. Express
2. MongoDB with mongoose ODM library
3. NodeJS

Beginning the Project:
    
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

    Open package.json and add the following to the "scripts"
     "start": "nodemon index.js",

    Note:
    The naming convention for a partials html template ejs file is that it should begin with an underscore.
    e.g, _header.ejs is a partial in the views folder that is included in home.ejs file to work as header.
