var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MovieSchema = new Schema({
    name: { type: String, required: true, unique: true },
    genre: { type: Array},
    rating: { type: Number},
    date: { type:String,required: true},
    plot: { type: String},
    director: { type: String,required: true},
    writer: { type: String,required: true},
    cast: { type: Array},    
    poster:{type:String}
})

module.exports = mongoose.model('Movie', MovieSchema)
