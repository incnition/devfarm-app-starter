import app from '../server'
import factories from './factories'
import supertest from 'supertest'
import { User } from '../db'
const graphqlEndpoint = 'http://localhost:3001/'
const request = supertest(graphqlEndpoint)

module.exports.clean = async () => {
  return User.truncate({cascade: true})
             .then(() => console.log("Cleaned Test DB!"))
};
module.exports.app = app
module.exports.request = request
module.exports.factories = factories
  