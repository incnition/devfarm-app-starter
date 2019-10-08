import 'cross-fetch/polyfill';
import { GraphQLProvider } from 'graphql-react'
import { withGraphQLApp } from 'next-graphql-react'
import NextApp, { Container } from 'next/app'

class App extends NextApp {
  render() {
    const { Component, pageProps, graphql } = this.props
    return (
      <Container>
        <GraphQLProvider graphql={graphql}>
          <Component {...pageProps} />
        </GraphQLProvider>
      </Container>
    )
  }
}

export default withGraphQLApp(App)
