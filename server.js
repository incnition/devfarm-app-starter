const express = require('express');
const graphqlHTTP = require('express-graphql');
const next = require('next');

const schema = require('./graphql/schema');
const rootValue = require('./graphql/resolvers');

const dev = process.env.NODE_ENV !== 'production';
const graphiql = dev
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue,
      graphiql,
    }),
  );
  server.all('*', (req, res) => handle(req, res));

  const port = parseInt(process.env.PORT, 10) || 3000;
  return server.listen(port)
});
