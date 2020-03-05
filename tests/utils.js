const app = require('../server')
const factories = require('./factories')
const supertest = require('supertest')
const { User } = require('../db')
const graphqlEndpoint = 'http://localhost:3001/'
const request = supertest(graphqlEndpoint)

module.exports.clean = async () => {
  return User.truncate({cascade: true})
             .then(() => console.log("Cleaned Test DB!"))
};
module.exports.app = app
module.exports.request = request
module.exports.factories = factories
  