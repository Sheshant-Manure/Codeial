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
