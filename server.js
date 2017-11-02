var express = require('express')
var app = express();
var port = process.env.PORT || 5000
var morgan = require('morgan')
var mongoose = require('mongoose')
var User = require('./app/model/userModel')
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require("./app/routes/api")(router)
var path =require('path')
var monk = require('monk');
var db = monk('Test:123456789@ds137435.mlab.com:37435/movieworld')

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));





//http://localhost:5000/api/users
 
// mongoose.connect('mongodb://Test:123456789@ds137435.mlab.com:37435/movieworld', function (Error) {
//   if (Error) {
//     console.log("not connected to db" + Error)
//   } else {
//     console.log("connected to mongo db ne se plashete ot teksta gore ne e error")
//   }
// })

// var db = mongoose.connect('mongodb://Test:123456789@ds137435.mlab.com:37435/movieworld');
app.use(function(req, res, next){
  req.db = db;
  next();
});

var movies = require('./routes/movies');
var users = require('./routes/users');


app.use('/movies', movies);
app.use('/api',appRoutes)
app.use('/users', users);
//tests
// app.get('/home', function (req, res) {
//   res.send("Helsslo from home")
// })
//tests
// app.get('/', function (req, res) {
//   res.send("hello world")
// })

app.get('/',function (req,res) {
  res.sendFile(path.join(__dirname + '/public/index.html'))
  // dirname e segashnata direktoeiq  + publick e kade se namira htmla koito da otvori 
  //tesla5 
})

app.listen(port, function () {
  console.log("Running sesssssssrver " + port)
});

module.exports = app;



































































































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
// var User =require('/app/model/userModel')
// var bodyParser = require('body-parser');
// var router =express.Router()
// var appRoutes =require("routes/api")(router)
// var path = require('path')
// app.use(morgan('dev'));
// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(express.static('C:/MovieWorld/MovieWorld/public/app/views/index.html'))
// app.use(express.static(__dirname +'/public')) **
// app.use('routes/api',appRoutes)

// moongose.connect('mongodb://Test:123456789@ds137435.mlab.com:37435/movieworld',function (Error) {
//   if (Error) {
//     console.log("Not connected to datsabasse "+ Error)
//   }else{
//     console.log("Successfully connected to MongoDB")
//   }
// })

// app.get('*',function (req,res) {
//   res.sendFile(path.join(__dirname + '/public/app/views/index.html')) 
//   // **trqbva da go napravim da raboti taka 
//   // res.sendFile(path.join('C:/MovieWorld/MovieWorld/public/app/views/index.html'))
// })

// app.get('/home',function (req,res) {
//   res.send("Hello from home")
// })

// app.listen(port,function () {
//   console.log("Running the server on port "+port)
// })