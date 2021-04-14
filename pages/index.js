// vi: sts=2 sw=2 et
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Shuffle from 'shufflejs';
import Theme from '../layouts/Theme';
import styles from './index.module.css';

export async function getStaticProps() {
  const query = { title: 'Tim Clifford',
                  subtitle: 'Download my GPG public key',
                  subtitle_link: '/tim_clifford.gpg',
                  subtitle_color: '#6272a4',
                  color: 'purple',
                }
  const isProd = process.env.NODE_ENV === 'production';
  const base = isProd ? 'https://tim.clifford.lol' : 'http://localhost:3000';

  return { props: { query } };
}

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.element = React.createRef();
  }

  render() {
    const title = 'Tim Clifford';
    const description = 'Hi!';
    const image = '/static/img/about.jpeg';

    return (
      <div className="single">
        <Head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta content={title} property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta content="Tim Clifford" name="author" />
          <meta content="https://tim.clifford.lol" property="og:url" />
          <meta content={`https://tim.clifford.lol${image}`} property="og:image" />
        </Head>

        <div className="wrap">
          <div className="theme">
            <p>
              Hi! I'm Tim. I'm an engineering student, space enthusiast, and
              avid contributor to free and open source projects. Feel free to
              email me at&nbsp;
              <a href="mailto:tclifford@protonmail.com">tclifford@protonmail.com</a>
              &nbsp;or <a href="mailto:tim@cusf.co.uk">tim@cusf.co.uk</a>
            </p>
            <h2 style={{color:"#8be9fd"}}>CUSF</h2>
            <p />
            <p>
              Currently I am the Treasurer and Sponsorship/Industrial Liason
              for Cambridge University Spaceflight, a student society aiming to
              reach the Karman Line by 2023. For more information, visit our
              website <a href="https://www.cusf.co.uk">here</a>
            </p>
            <p />
            <h2 style={{color:"#50fa7b"}}>GitHub Stats</h2>
            <p />
            <p>
              Here are my stats on GitHub, where I develop software and
              contribute to various free and open source projects
            </p>
            <p />
            <a href="https://github.com/anuraghazra/github-readme-stats">
              <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=tim-clifford&layout=compact&theme=dracula&langs_count=6&hide_border=true&card_width=445" width="49.3%"/>
            </a>
            <a href="https://github.com/anuraghazra/github-readme-stats">
              <img align="center" src="https://github-readme-stats.vercel.app/api?username=tim-clifford&show_icons=true&theme=dracula&include_all_commits=true&hide_title=true&count_private=true&hide_border=true" width="49.3%"/>
            </a>
            <p />
            <h2 style={{color:"#f1fa8c"}}>Good workflow is worth the development time</h2>
            <p />
            <p>
              We spend so much of our lives sitting in front of computers that
              it's really worth taking the extra time to make it as efficient
              and comfortable as possible. Here are some projects that help me do that.
              &nbsp;
            </p>
            <p><i>
                See also&nbsp;
                <a href="https://tim.clifford.lol/dracula">Dracula</a>
            </i></p>
            <p />
            <a href="https://github.com/tim-clifford/.config">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=tim-clifford&repo=.config&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <a href="https://github.com/smh-my-head/charon">
             <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=smh-my-head&repo=charon&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <a href="https://github.com/tim-clifford/ErgoDash-R">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=tim-clifford&repo=ErgoDash-R&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <a href="https://github.com/tim-clifford/nvimrc">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=tim-clifford&repo=nvimrc&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <a href="https://github.com/tim-clifford/vim-venus">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=tim-clifford&repo=vim-venus&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <a href="https://github.com/tim-clifford/vim-qalc">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=tim-clifford&repo=vim-qalc&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <p />
            <h2 style={{color:"#ff79c6"}}>Other Projects</h2>
            <p />
            <p>
              Fun things I've worked on in the past
            </p>
            <a href="https://github.com/tim-clifford/pixel-prime">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=tim-clifford&repo=pixel-prime&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <a href="https://github.com/tim-clifford/casio-cpong">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=tim-clifford&repo=casio-cpong&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <a href="https://github.com/tim-clifford/astrodynamics-sim">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=tim-clifford&repo=astrodynamics-sim&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <p />
          </div>
        </div>
      </div>
    )
  }
}

Index.Layout = Theme;

export default Index;
