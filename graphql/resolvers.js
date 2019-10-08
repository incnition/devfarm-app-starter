const { User } = require('../db/models');

const resolvers = {
  Query: {
    user: (_, args) => {
      return User.findOne(args)
    },
    users: (_, args) => {
      return User.find(args);
    },
  },
};

module.exports = resolvers;
