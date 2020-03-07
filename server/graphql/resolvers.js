const { mutations } = require('./mutations')
const { queries } = require('./queries')

const resolvers = Object.assign({}, queries, mutations)

module.exports = resolvers
