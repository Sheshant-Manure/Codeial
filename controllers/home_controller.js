// Format: module.exports.actionName = function() { body/definition }

module.exports.home = function(req, res) {
    return res.end('<h1>Codeial</h1>');
};