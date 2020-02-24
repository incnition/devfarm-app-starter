import supertest from 'supertest'
import app from '../../server'
import { findAllByAltText } from '@testing-library/dom'
const graphqlEndpoint = 'http://localhost:3001/'
const request = supertest(graphqlEndpoint)

let server
beforeAll(async () => {
  server = await app
})

afterAll(done => {
  server.close()
  done()
})

describe('users', () => {
  it('returns a list of users', async (done) => {
    // const users = 
    request
      .post('/graphql')
      .send({ query: '{ user { id firstName lastName email } }' })
      .expect(200)
      .end((error, response) => {
        if (error) fail(error)
        if (response) console.warn(response.body)
        const { users } = response.body
        expect(users).toEqual([{id: 1}])
        console.warn(users)
        done()
      })
  })
})
