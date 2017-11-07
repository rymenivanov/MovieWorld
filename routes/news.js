var express = require('express');
var router = express.Router();

/* GET news listing from database. */
router.get('/', function (req, res, next) {
    var db = req.db;
    var news = db.get('news');
    
    news.find({}, {}, function (err, docs) {
        res.json(docs);
    })
});

module.exports = router;