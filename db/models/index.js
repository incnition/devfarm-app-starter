const mongoose = require('mongoose');
const User = require('./user.model');
const { dbConnectionUri } = require('../config')

mongoose.connect(dbConnectionUri, { useNewUrlParser: true })

module.exports = { User };
