var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs')
var UserSchema = new Schema({
    username: { type: String, lowercase: true, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    favoriteMovies:{type:Array}
})
//suzdavaneto na konstruktor stava kato se definira promenliva  mongoose.model('User', UserSchema) i se suzdade noviqt obekt
// var testUser = mongoose.model('User', UserSchema);
// var test = new testUser(
//     { username: 'Silence',password:"saklfhaflha",email:"sfa;lf@gmail.com" })
UserSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, null, null, function (err, hash) {
        if (err) return next(err)
        user.password = hash
        next()
    })
})

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });
module.exports = mongoose.model('User', UserSchema)
// console.log('what  '+mongoose.model('User',UserSchema))
// console.log(UserSchema)