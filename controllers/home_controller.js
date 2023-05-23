// Format: module.exports.actionName = function() { body/definition }

module.exports.home = function(req, res) {
    return res.render('home',{
        title: 'Home'
    });
}