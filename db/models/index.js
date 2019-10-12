const mongoose = require('mongoose')
const User = require('./user.model')
const { dbConnectionUri } = require('../config')

const dbConnection = mongoose.connect(dbConnectionUri, {
  useNewUrlParser: true
})

// connection.then(conn => console.log('connection: ', conn.connections[0]))

module.exports = { User, dbConnection }
