var User = require("../model/userModel")
module.exports = function(router) {
    // za da se connectnete kum bazata danni prez cmd pishete ////////mongo ds137435.mlab.com:37435/movieworld -u Test -p 123456789 /////////// 
    /// ili vashite imena i paroli 
    // http://localhost:5000/api/users
    router.put('/users', function (req, res) {
        var user = new User
        user.username = req.body.username
        user.password = req.body.password
        user.email = req.body.email

        if (req.body.username == null || req.body.username == ""
            || req.body.password == null || req.body.password == "" ||
            req.body.email == null || req.body.email == "") {
            res.send("ne ostavqi prazni poleta")
        }
        else {
            user.save(function (Error) {
                if (Error) {
                    res.send("ima pichaga s tova ime ili parola, katil")
                } else {
                    res.send("user created")
                }
            });
        }
    })
    
    return router
}