import { factories, request } from '../../tests/utils'
import { User } from '../db'
import '../../tests/setup'

describe('user', () => {
  it('returns one user', async done => {
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
  it('returns a list of users', async done => {
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
        expect(users).toEqual([
          {
            id: user.id.toString(),
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
          }
        ])
        done()
      })
  })
})

describe('createUserWithEmail', () => {
  it('creates a user with a specified email', async done => {
    const variables = JSON.stringify({
      input: {
        email: 'me@example.com',
        firstName: 'Guy',
        lastName: 'Smiley',
        password: 'P@ssw0rd!',
        passwordConfirmation: 'P@ssw0rd!',
        admin: false
      }
    })
    const query = `
      mutation ($input: UserInput!) {
        createUserWithEmail(input: $input) {
          id
          email
          firstName
          lastName
          admin
        }
      }
    `
    request
      .post('graphql')
      .send({ query, variables })
      .expect(200)
      .end(async (error, response) => {
        if (error) fail(error)
        const _user = await User.findOne()
        expect(_user).toBeTruthy()
        expect(response.body.data).toEqual({
          createUserWithEmail: {
            id: _user.id.toString(),
            email: 'me@example.com',
            firstName: 'Guy',
            lastName: 'Smiley',
            admin: false
          }
        })
        done()
      })
  })
});
