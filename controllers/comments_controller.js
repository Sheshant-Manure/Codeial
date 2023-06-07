const Comment = require('../models/commentSchema');
const Post = require('../models/postSchema');

module.exports.create = function(req, res) {
       
        Post.findById(req.body.post).then(post=>{
        if(post)
        {
            Comment.create({
                content: req.body.content,
                user: req.user._id,
                post: req.body.post
            }).then(comment=>{
                post.comments.push(comment);
                post.save();
            });
            res.redirect('/users/posts');          
        }
    }); 
}