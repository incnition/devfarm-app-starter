import 'cross-fetch/polyfill';

import { GraphQLProvider } from 'graphql-react'
import { withGraphQLApp } from 'next-graphql-react'
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NextApp from 'next/app';

import theme from '../styles/theme';

class App extends NextApp {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps, graphql } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GraphQLProvider graphql={graphql}>
                    <Component {...pageProps} />
                </GraphQLProvider>
            </ThemeProvider>
        );
    }
}

export default withGraphQLApp(App)
