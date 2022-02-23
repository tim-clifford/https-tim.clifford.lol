import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="icon" type="image/png" href="/avatar_48.png"/>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta property="og:type" content="website" />
        </Head>
        <Main />
        <NextScript />
      </html>
    )
  }
}
