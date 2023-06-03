const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/userSchema');

// Authentication using passport
passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    async (email, password, done) => {
        const docs = await User.findOne({email: email}).exec();
        if (docs) {
            if (docs.password == password) {
                return done(null, docs);
            }
            else {
                return done(null, false, {message: 'Invalid email or password'});
            }
        }
    }
));

// Serializing the user for assisgning the key in the cookie
passport.serializeUser((user, done)=> {
    done(null, user._id);
});

// Deserializing the user from the key in the cookie
passport.deserializeUser(async (id, done)=>{
    const docs = await User.findOne({_id: id}).exec();
    if(!docs)
        return done(null, false);
    else
        return done(null, docs);
});

//Check if the user is authenticated
passport.checkAuthentication = (req, res, next)=> {
    // If the user is signed in, then pass on the request to the next function (controller's action)
    if(req.isAuthenticated()) {
        return next();
    }
    // If the user is not signed in
    return res.redirect('/users/sign_in');
}

passport.setAuthenticatedUser = (req, res, next)=> {
    if(req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie
        // We are sending this as locals to the views
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;