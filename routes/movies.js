var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('123')
    var db = req.db;
   
    var movies = db.get('Movies');
    movies.find({} , {} , function(err,docs){
        res.json(docs);
    })
    

});

module.exports = router;