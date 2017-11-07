// var express = require('express');
// var router = express.Router();


// /* GET home page. */
// // router.get('/', function(req, res, next) {
// //   res.render('index', { title: 'gnad' });
// // });

// module.exports = router;


// var app=express()
// var port = process.env.PORT || 5000
// var morgan = require('morgan')
// var moongose =require('mongoose')
// var User =require('../app/model/userModel')
// var bodyParser = require('body-parser');
// var router =express.Router()
// var appRoutes =require("./api")(router)
// var path = require('path')
// app.use(morgan('dev'));
// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('C:/MovieWorld/MovieWorld/public/app/views/index.html'))
// // app.use(express.static(__dirname +'/public')) **
// app.use('/api',appRoutes)

// moongose.connect('mongodb://localhost:27017/IMDBtestDB',function (Error) {
//   if (Error) {
//     console.log("Not connected to datsabasse "+ Error)
//   }else{
//     console.log("SSuccessfully connected to MongoDB")
//   }
// })

// app.get('*',function (req,res) {
//   // res.sendFile(path.join(__dirname + '/public/app/views/index.html')) **trqbva da go napravim da raboti taka 
//   res.sendFile(path.join('C:/MovieWorld/MovieWorld/public/app/views/index.html'))
// })

// app.get('/home',function (req,res) {
//   res.send("Hello from home")
// })

// app.listen(port,function () {
//   console.log("Running t.he server on port "+port)
// })