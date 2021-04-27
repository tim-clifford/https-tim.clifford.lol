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
            <div>
              <div className="inner-div">
                <a href="http://creativecommons.org/licenses/by-nc-nd/3.0/us/" rel="license"><img alt="Creative Commons License" src="http://i.creativecommons.org/l/by-nc-nd/3.0/us/88x31.png"/></a>
              </div>
              <div>
                <i>
                  This page is not my work, it is a reproduction of a page from&nbsp;
                  <a href="https://www.phildev.net/pgp/gpgwhy.html">
                    Phil's GPG Docs
                  </a> by <a href="http://www.phildev.net/"
                      rel="cc:attributionURL">
                    Phil Dibowitz
                  </a>, which is licensed under the&nbsp;
                  <a rel="license"
                      href="http://creativecommons.org/licenses/by-nc-nd/3.0/">
                    CC-BY-NC-ND 3.0 Unported License
                  </a>. Only the formatting has been changed.
                </i>
              </div>
            </div>

<p/>
<p>
      PGP is useful for two things: 1. Privacy and Security, and 2.
      Authenticity. By privacy, I mean that you can prevent people from seeing
      things. For example, you can encrypt an email to someone, or encrypt a
      file with a list of passwords. By Authenticity, I mean that you can
      ensure a message was sent/written by the person you think it was, and
      that it wasn't modified by a third party. Of course, these two can be
      combined. I'll discuss these further.
</p>


<h2 style={{color: '#ff79c6'}}>Privacy and Security (Encryption)</h2>

<p/>
<p>
      By using PGP for encryption, you can send something private or sensitive,
      or have someone send you something private or sensitive and be sure no
      one else can read it - not even the administrator of your email server. I
      should note that for this to be effective, unencrypted copies should not
      be kept, obviously.
</p>
<p>
      Group passwords, account numbers, etc. can all be passed securely between
      parties that need to convey such sensitive information.
</p>
<p>
      But it doesn't just help for email. GPG Encryption gives you a way to store
      private data for yourself securely. You can have an encrypted file with
      all of your online passwords, or your bank account information, or
      anything else you might want safe.
</p>
<p>
      Another examples is encrypting data before you send it off to online
      storage so no one can read it.
</p>
<p>
      Regardless of what you want to keep safe, PGP provides a free and safe way
      to do it.
</p>


<h2 style={{color: '#bd93f9'}}>Authenticity (Signing)</h2>

<p/>
<p>
      If you need someone to be sure you really sent something, you can
      digitally sign an email, a piece of software, source code, or anything
      else.
</p>
<p>
      By doing this, anyone reading the email, or downloading that software can
      be certain that:
</p>

  <ul>
      <li>It really is from you</li>
      <li>
          It wasn't modified from the time you signed it to the time they
          verified it
      </li>
  </ul>

<p/>
<p>
      This is a secure way for managers to provide directives to their
      employees or for students to ensure communication from their University
      isn't forged. It allows software users and authors to ensure that trojans
      weren't slipped into programs unexpectedly by a hacker.
</p>
<p>
      But some people take it further than just signing important emails - they
      sign all of them. Why?
</p>
<p>
      Well if I sign all of my emails as a matter of policy, than no one can
      forge email as me. Any email that comes from me but isn't signed is
      clearly a forgery! And when it's as easy as setting your email address to
      <em>joe@something.com</em> in your mail client and sending off an email,
      why would you not want to protect yourself from this?
</p>
<p>
      What if all communication from Universities, ISPs, and corporations were
      signed? No more Ebay and bank phishing scams, no more viruses from
      admin@yourcompany.com, no more "this is support, please respond with your
      password." Why? Because if every piece of official mail from major
      institutions was signed using their private key, then people could easily
      ignore any email that doesn't validate. The large red warning in mail
      clients would drastically cut down on people clicking on bad things
      (although rest assured, some people would still do it).
</p>
<p>
      By the same token, if you sign all of your email, people will know that the
      virus didn't came from you when it's not signed and that the prank email
      to the entire office wasn't from you.
</p>
<p>
      Of course, not everyone needs to, or can, sign every email. But the
      mechanism is still there for signing things that need extra authenticity
      and verification.
</p>




          </div>
        </div>
      </div>
    )
  }
}

WhyPGP.Layout = Theme;

export default WhyPGP;
