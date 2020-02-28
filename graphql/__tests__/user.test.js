import app from '../../server'
import { clean } from '../../tests/utils'
import factories from '../../tests/factories'
import supertest from 'supertest'
const graphqlEndpoint = 'http://localhost:3001/'
const request = supertest(graphqlEndpoint)

let server
beforeAll(async () => {
  server = await app
})

beforeEach(async () => {
  await clean()
})

afterAll(done => {
  server.close()
  done()
})

describe('user', () => {
  it('returns one user', async (done) => {
    const user = await factories.create('User')
    const query = `
      {
        user(id: ${user.id}){
          id
          firstName
          lastName
          email
        }
      }
    `
    request
      .post('graphql')
      .send({ query })
      .expect(200)
      .end((error, response) => {
        if (error) fail(error)
        const { user } = response.body.data
        expect(user).toEqual({
          id: user.id.toString(),
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        })
        done()
      })
  })
})

describe('users', () => {
  it('returns a list of users', async (done) => {
    const user = await factories.create('User')
    const query = `
      {
        users {
          id
          firstName
          lastName
          email
        }
      }
    `
    request
      .post('graphql')
      .send({ query })
      .expect(200)
      .end((error, response) => {
        if (error) fail(error)
        const { users } = response.body.data
        expect(users).toEqual([{
          id: user.id.toString(),
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        }])
        done()
      })
  })
})
