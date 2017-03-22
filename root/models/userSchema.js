var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = mongoose.Schema({
   email: { type:String, required:true, unique:true },
   username: { type: String, required: true, index:true},
   password: { type: String, required: true },
   created_at: Date,
   updated_at: Date

});

//userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(error, hash) {
          if (error) throw error;
          newUser.password = hash;
          console.log(newUser);
	        newUser.save(callback);
	    });
      if (err) throw err;
	});
}

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
          console.log(newUser);
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}
