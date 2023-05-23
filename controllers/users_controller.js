// Format: module.exports.actionName = function() { body/definition }

module.exports.profile = function(req, res) {
    return res.render('Profile',{
        title: 'Profile'
    });
};

module.exports.posts = function(req, res) {
    return res.render('Posts',{
        title: 'Posts'
    });
};