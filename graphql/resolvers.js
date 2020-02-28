const { User } = require('../db')

const resolvers = {
  Query: {
    user: (_, args) => {
      return User.findOne(args)
    },
    users: (_, args) => {
      return User.findAll()
    }
  }
}

module.exports = resolvers
