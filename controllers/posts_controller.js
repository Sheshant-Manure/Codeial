const Post = require('../models/postSchema');

module.exports.create = function(req, res) {
    Post.create({
        content: req.body.content,
        user: req.user._id
    });
    res.redirect('/users/posts');
}