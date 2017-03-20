var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = mongoose.Schema({
  local:{
   email: { type:String, required:true, unique:true },
   username: { type: String, required: true, index:true},
   password: { type: String, required: true },
   created_at: Date,
   updated_at: Date
 }
});

//userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',userSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.local.password, salt, function(error, hash) {
          if (error) throw error;
          newUser.local.password = hash;
	        newUser.save(callback);
	    });
      if (err) throw err;
	});
}
//
// module.exports.getUserByEmail = function(email, callback){
// 	var query = {email: email};
// 	User.findOne(query, callback);
// }
//
// module.exports.getUserById = function(id, callback){
// 	User.findById(id, callback);
// }
//
// module.exports.comparePassword = function(candidatePassword, hash, callback){
// 	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
//     	if(err) throw err;
//     	callback(null, isMatch);
// 	});
// }
