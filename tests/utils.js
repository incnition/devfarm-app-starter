import app from '../server'
import factories from './factories'
import supertest from 'supertest'

import { User } from '../server/db'
const graphqlEndpoint = 'http://localhost:3001/'
const request = supertest(graphqlEndpoint)

export const clean = async () => {
  return User.truncate({cascade: true})
             .then(() => console.log("Cleaned Test DB!"))
};
export { app, request, factories }
  