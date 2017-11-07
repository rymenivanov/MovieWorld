var User = require("../model/userModel")
module.exports = function(router) {
    router.put('/users', function (req, res) {
        var user = new User
        user.username = req.body.username
        user.password = req.body.password
        user.email = req.body.email
        if (req.body.username == null || req.body.username == ""
            || req.body.password == null || req.body.password == "" ||
            req.body.email == null || req.body.email == "") {
            res.send("Don't Leave Blank Spaces")
        }
        else {
            user.save(function (Error) {
                if (Error) {
                    res.send("Already Exist")
                } else {
                    res.send("User created")
                }
            });
        }
    })
    return router
}