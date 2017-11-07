
var Actor = require("../model/actrorModel");
module.exports = function(router) {
  router.put("/actor", function(req, res) {
    var actor = new Actor();
    actor.name = req.body.name;
    actor.birthDate = req.body.birthDate;
    actor.country = req.body.country;
    actor.picture = req.body.picture;
    actor.year = req.body.year;
    if (
      req.body.name == null ||
      req.body.name == "" ||
      req.body.birthDate == null ||
      req.body.birthDate == "" ||
      req.body.country == null ||
      req.body.country == "" ||
      req.body.year == null ||
      req.body.year == ""
    ) {
      res.send("Don't Leave Blank Spaces");
    } else {
      actor.save(function(Error) {
        if (Error) {
          res.send("Invalid Data" + Error);
        } else {
          res.send("Actor created");
        }
      });
    }
  });
  return router;
};
