const mongoose = require('mongoose');
const User = require('./user.model');
const Candidate = require('./candidate.model');
const { dbConnectionUri } = require('../config')

mongoose.connect(dbConnectionUri, { useNewUrlParser: true })

module.exports = { Candidate, User };
