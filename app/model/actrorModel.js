var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ActorSchema = new Schema({
    name: { type: String, required: true, unique: true },
    birthDate: { type: String},
    characteristics : {type: String},
    country: { type: String},
    picture: { type: String},
    movies:{type:Array}
})

module.exports = mongoose.model('Actor', ActorSchema)
