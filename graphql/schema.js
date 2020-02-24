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
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })
