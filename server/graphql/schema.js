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
    password: String!
    passwordConfirmation: String!
    admin: Boolean
  }

  input UserInput {
    email: String!
    firstName: String!
    lastName: String!
    password: String!
    passwordConfirmation: String!
    admin: Boolean
  }

  type Mutation {
    createUserWithEmail(input: UserInput!): User!
    updateUser(input: UserInput!): User!
  }
`

console.log(resolvers)

module.exports = makeExecutableSchema({ typeDefs, resolvers })
