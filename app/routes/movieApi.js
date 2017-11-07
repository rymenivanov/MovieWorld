
var Movie = require("../model/movieModel");
module.exports = function(router) {
  router.put("/movie", function(req, res) {
    var movie = new Movie();
    movie.name = req.body.name;
    movie.genre = req.body.genre;
    movie.rating = req.body.rating;
    movie.date = req.body.date;
    movie.plot = req.body.plot;
    movie.director = req.body.director;
    movie.writer = req.body.writer;
    movie.cast = req.body.cast;
    movie.poster = req.body.poster;
    if (
      req.body.name == null ||
      req.body.name == "" ||
      req.body.date == null ||
      req.body.date == "" ||
      req.body.director == null ||
      req.body.director == "" ||
      req.body.writer == null ||
      req.body.writer == ""
    ) {
      res.send("Don't Leave Blank Spaces");
    } else {
      movie.save(function(Error) {
        if (Error) {
          res.send("Invalid Data" + Error);
        } else {
          res.send("Movie created");
        }
      });
    }
  });
  return router;
};
