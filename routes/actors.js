var express = require('express');
var router = express.Router();

/* GET actors from database */
router.get('/', function (req, res, next) {
    console.log('123')
    var db = req.db;

    var actors = db.get('actors');
    actors.find({}, {}, function (err, docs) {
        res.json(docs);
    })
});

module.exports = router;