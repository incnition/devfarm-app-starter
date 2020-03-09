import { User } from '../db'

module.exports.queries = {
  Query: {
    user: (_, args) => User.findOne(args),
    users: (_, _args) => User.findAll()
  }
}
