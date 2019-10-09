require('dotenv').config()

module.exports = {
  graphQLConfig: options => {
    options.url = `${process.env.APP_HOST}/graphql`
  }
}
