// Importing the User model which is defined in userSchema.js
const User = require('../models/userSchema');


// Format: module.exports.actionName = function() { body/definition }

// Render user profile page
module.exports.profile = async function(req, res) {
    if(req.cookies.user_id)
    {
        const user = await User.findById(req.cookies.user_id).exec();
        if(user)
        {
            return res.render('profile', {
                title: 'Profile',
                username: user.name,
                email: user.email
            });
        }
        else
            return res.redirect('back');
    }
    else
        return res.redirect('back');

    
};

// Render posts page
module.exports.posts = function(req, res) {
    return res.render('Posts',{
        title: 'Posts'
    });
};

// Render sign up page
module.exports.signup = function(req, res) {
    return res.render('user_signup',{
        title: 'Sign Up'
    });
};

// Render sign in page
module.exports.signin = function(req, res) {
    return res.render('user_signin',{
        title: 'Sign In'
    });
};

// Get the sign up data and create an account
module.exports.createAccount = async function(req, res) {
    if(req.body.password != req.body.confirmPassword){
        return res.redirect('back');
    }

    const user = await User.findOne({email: req.body.email}).exec();
    if(!user) // If user (with the entered email on sign up page) is not found, then...
    {
        // Creating a new user with the following credentials
        User.create(
            {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
        );
        return res.render('user_signin',{
            title: 'Sign In'
        });
    } 
    else
    {
        return res.redirect('back');
    }
}

// Sign in the user with session/cookie for manual authentication
module.exports.createSession = async function(req, res) {
    // find the user
    const user = await User.findOne({email: req.body.email}).exec();
    if(user) // If user (with the entered email on sign in page) is found, then...
    {
        if(user.password == req.body.password) // If the password matches with the corresponding email in the DB, then...
        {
            // Creating a new cookie with the following credentials
            res.cookie('user_id', user._id);  // user_id is the name of the cookie and user._id is its value fetched from the user document from MongoDB server
            res.redirect('profile');
        }
        else
            return res.redirect('back');
    }
    // Action when user is found
    // Action when user is not found
};

// Sign out 
module.exports.signout = function(req, res) {
    // Destroy the cookie
    res.clearCookie('user_id');
    res.redirect('sign_in');
}