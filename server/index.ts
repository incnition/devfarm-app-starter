import express from 'express'
import graphqlHTTP from 'express-graphql'
import next from 'next'
import schema from './graphql/schema'
import rootValue from './graphql/resolvers'
import morgan from 'morgan'

const dev = process.env.NODE_ENV !== 'production'

const graphiql = dev
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express()
server.use(morgan('combined'))
const extensions = ({
  document,
  variables,
  operationName,
  result,
  context,
}) => {
  return {
    runTime: Date.now() - context.startTime,
    result: JSON.stringify(result),
    operation: JSON.stringify(operationName),
    variables,
  };
};

server.use(
  '/graphql',
  graphqlHTTP((_request,_response) => {
    let result = {
      schema,
      rootValue,
      graphiql,
      prettyPrint: dev,
      context: { startTime: Date.now() },
      customFormatErrorFn: (error) => {
        const {message, originalError, locations, path} = error
        console.log("MESSAGE", error)
        return {
          message,
          state: originalError && originalError.state,
          locations,
          path,
        }
      },
    }
    return (
      dev ?
        Object.assign({}, result, {extensions}) :
        result
    )
  })
)
server.all('*', (req, res) => handle(req, res))
let port = parseInt(process.env.PORT, 10) || 3000
if (process.env.NODE_ENV === 'test') port++

export default app
  .prepare()
  .then(() => server.listen(port))
  .catch(err => console.error(err))
