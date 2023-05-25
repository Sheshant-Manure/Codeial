// Importing the User model which is defined in userSchema.js
const User = require('../models/userSchema');


// Format: module.exports.actionName = function() { body/definition }

// Render user profile page
module.exports.profile = function(req, res) {
    return res.render('Profile',{
        title: 'Profile'
    });
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
            res.cookie('user_id', user._id);
            res.redirect('profile');
        }
        else
            return res.redirect('back');
    }
    // Action when user is found
    // Action when user is not found
};