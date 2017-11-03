
var Movie = require("../model/movieModel");
module.exports = function(router) {
  // za da se connectnete kum bazata danni prez cmd pishete ////////mongo ds137435.mlab.com:37435/movieworld -u Test -p 123456789 ///////////
  /// ili vashite imena i paroli
//   http://localhost:5000/movieApi/movie
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
      res.send("ne ostavqi zadujitelnite poleta prazni");
    } else {
      movie.save(function(Error) {
        if (Error) {
          res.send("nevalidni danni" + Error);
        } else {
          res.send("movie created");
        }
      });
    }
  });
  return router;
};
