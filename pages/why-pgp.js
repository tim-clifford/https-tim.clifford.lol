// vi: sts=2 sw=2 et
import React from 'react';
import Head from 'next/head';
import Theme from '../layouts/Theme';

export async function getStaticProps() {
  const query = { title: 'Why use PGP?', color: 'orange'};
  return { props: { query } };
}

class WhyPGP extends React.Component {
  render() {
    const title = 'Why use PGP?';
    const description = '';

    return (
      <div className="single">
        <Head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta content={title} property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta content="Tim Clifford" name="author" />
          <meta content="https://tim.clifford.lol/why_pgp" property="og:url" />
        </Head>
        <div className="wrap">
          <div className="theme">
Blog post on this coming soon.&nbsp;
<a href="https://www.phildev.net/pgp/gpgwhy.html">Phil's GPG Docs</a> is a
      great resource, which doesn't quite cover all the points I want to make.
          </div>
        </div>
      </div>
    )
  }
}

WhyPGP.Layout = Theme;

export default WhyPGP;
