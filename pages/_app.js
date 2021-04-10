import App from 'next/app';
import Router from 'next/router';

import '../styles/main.css';
import easterEgg from '../lib/easter-egg';

const Noop = ({ children }) => children

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const Layout = Component.Layout || Noop

    if (process.env.NODE_ENV === 'production') {
      console.log(easterEgg, "font-family:monospace");
    }

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
