var express = require('express');
var router = express.Router();

/* GET movies from database. */
router.get('/', function(req, res, next) {
    console.log('123')
    var db = req.db;
   
    var movies = db.get('movies');
    movies.find({} , {sort:'name'} , function(err,docs){
        res.json(docs);
    })

});


module.exports = router;