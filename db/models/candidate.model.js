mongoose = require('mongoose');

const CandidateSchema = mongoose.Schema({
  description: String,
  // user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // 1:1
  // image: String,
  // skillList: [{type: mongoose.Schema.Types.ObjectId, ref: 'Skill'}]
});
  
module.exports = mongoose.model('candidates', CandidateSchema);