
var Actor = require("../model/actrorModel");
module.exports = function(router) {
  // za da se connectnete kum bazata danni prez cmd pishete ////////mongo ds137435.mlab.com:37435/movieworld -u Test -p 123456789 ///////////
  /// ili vashite imena i paroli
//   http://localhost:5000/actorsApi/actor
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
      res.send("ne ostavqi prazni poleta");
    } else {
      actor.save(function(Error) {
        if (Error) {
          res.send("nevalidni danni" + Error);
        } else {
          res.send("actor created");
        }
      });
    }
  });
  return router;
};
