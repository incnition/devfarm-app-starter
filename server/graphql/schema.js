const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = `
  type Query {
    user(id: ID!): User
    users(limit: Int): [User]!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Mutation {
    createUserWithEmail(
      email: String!,
      firstName: String!,
      lastName: String!,
      password: String!,
      passwordConfirmation: String!,
      admin: Boolean
    ): User!

    updateUser(
      email: String,
      firstName: String,
      lastName: String,
      password: String,
      passwordConfirmation: String,
      admin: Boolean
    ): User!
  }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })
