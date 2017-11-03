var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ActorSchema = new Schema({
    name: { type: String, required: true, unique: true },
    birthDate: { type: String},
    country: { type: String},
    picture: { type: String},
    year:{type:String}
})

module.exports = mongoose.model('Actor', ActorSchema)



//  "username":"kakvoStana",
//   "password":"agagdga",
//   "email":"zashtoRaboi@gmail.com"
//   "name": "Test",
//     "birthDate":"12.32.22",
//     "country":"usa",
//     "picture":"https://upload.wikimedia.org/wikipedia/commons/1/1a/Image_upload_test.jpg",
//     "year":"124"