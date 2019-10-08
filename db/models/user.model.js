mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  // candidateProfile: {type: mongoose.Schema.Types.ObjectId, ref: 'Candidate'}, // 1:1
});
  
module.exports = mongoose.model('users', UserSchema);
