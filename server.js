const express = require('express')
const graphqlHTTP = require('express-graphql')
const next = require('next')

const schema = require('./graphql/schema')
const rootValue = require('./graphql/resolvers')

const dev = process.env.NODE_ENV !== 'production'
const graphiql = dev
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express()
server.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql
  })
)
server.all('*', (req, res) => handle(req, res))
let port = parseInt(process.env.PORT, 10) || 3000
if (process.env.NODE_ENV === 'test') port++

console.warn("PORT:", port)
const result = app
  .prepare()
  .then(() => server.listen(port))
  .catch(err => {
    console.warn('ERRROOOOOOORR:', err)
  })
console.warn("RESULT!", result)

module.exports = server
// return server.listen(port, () => {
//   console.log('Listening on port ', port)
//   resolve(app)
// })
// })
// .catch(err => reject(err))
