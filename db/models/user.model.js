mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});
  
module.exports = mongoose.model('users', UserSchema);
