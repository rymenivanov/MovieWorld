var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ActorSchema = new Schema({
    name: { type: String, required: true, unique: true },
    birthDate: { type: String},
    country: { type: String},
    picture: { type: String},
    year:{type:String}
});

module.exports = mongoose.model('Actor', ActorSchema);