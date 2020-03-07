import express from 'express'
import graphqlHTTP from 'express-graphql'
import next from 'next'
import schema from './graphql/schema'
import rootValue from './graphql/resolvers'

const dev = process.env.NODE_ENV !== 'production'

const graphiql = dev
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express()
server.use(
  '/graphql',
  graphqlHTTP(request => {
    return {
      schema,
      rootValue,
      graphiql,
    }
  })
)
server.all('*', (req, res) => handle(req, res))
let port = parseInt(process.env.PORT, 10) || 3000
if (process.env.NODE_ENV === 'test') port++

export default app
  .prepare()
  .then(() => server.listen(port))
  .catch(err => console.error(err))
