var express = require('express');
var router = express.Router();

/* GET one movie from database with _id. */

router.get('/:_id', function (req, res) {
    var db = req.db;
    var collection = db.get('movies');
    var movieToGet = req.params._id;
    collection.find({ _id: movieToGet }, {}, function (e, docs) {
        res.json(docs);
    });

})

module.exports = router;