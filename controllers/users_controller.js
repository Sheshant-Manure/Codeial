// Importing the User model which is defined in userSchema.js
const User = require('../models/userSchema');
const Post = require('../models/postSchema');

// Format: module.exports.actionName = function() { body/definition }

// Render user profile page
module.exports.profile = function(req, res) {
    return res.render('Profile',{
        title: 'Profile'
    });
};

// Render posts page
module.exports.posts = async function(req, res) {
    
    //If the user is not already signned in, then...
    if(!req.isAuthenticated()){
        return res.redirect('/users/sign_in');
    }

    // Finding all the posts
    const posts = await Post.find({});
    let users = [];
    for(let i=0;i<posts.length;i++){
        // Finding the user who created the post
        const user = await User.findById(posts[i].user);
        users.push(user);
    }
    return res.render('Posts',{
        title: 'Posts',
        posts: posts,
        users: users
    });
};

// Render sign up page
module.exports.signup = function(req, res) {
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_signup',{
        title: 'Sign Up'
    });
};

// Render sign in page
module.exports.signin = function(req, res) {
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_signin',{
        title: 'Sign In'
    });
};

// Get the sign up data
module.exports.createAccount = async function(req, res) {
    if(req.body.password != req.body.confirmPassword){
        return res.redirect('back');
    }

    const docs = await User.findOne({email: req.body.email}).exec();
    if(!docs) // If user (with the entered email on sign up page) is not found, then...
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

// Sign in the user with session/cookie
module.exports.createSession = function(req, res) {
    return res.redirect('/');
};

module.exports.destroySession = function(req, res, next) {
    req.logout((err)=>{   // passport does this action
        if(err) {
            return next(err);
        }
        return res.redirect('/');
    });  
};