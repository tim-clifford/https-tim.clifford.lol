// vi: sts=2 sw=2 et
import React from 'react';
import Head from 'next/head';
import Theme from '../layouts/Theme';

export async function getStaticProps() {
  const query = { title: 'Dracula Themes', color: 'pink'};
  return { props: { query } };
}

class Dracula extends React.Component {
  render() {
    const title = 'Tim Clifford — Dracula Themes';
    const description = '';
    const image = '/static/img/dracula.jpeg';

    return (
      <div className="single">
        <Head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta content={title} property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta content="Tim Clifford" name="author" />
          <meta content="https://tim.clifford.io/about" property="og:url" />
          <meta content={`https://tim.clifford.io${image}`} property="og:image" />
        </Head>
        <div className="wrap">
          <div className="theme">
			<p>
			  Dracula is unequivocally the best theme. Dark themes are a no
			  brainer - I like my eyeballs intact, thank you very much. And
			  Dracula's colorscheme is simply gorgeous. With that in mind, I've
		      contributed several implementations of the theme...
		   </p>

            <a href="https://github.com/tim-clifford/dracula-contrib-generator">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=tim-clifford&repo=dracula-contrib-generator&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <a href="https://github.com/dracula/matplotlib">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=dracula&repo=matplotlib&show_owner=true&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <a href="https://github.com/dracula/xournalpp">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=dracula&repo=xournalpp&show_owner=true&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <a href="https://github.com/dracula/libreoffice">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=dracula&repo=libreoffice&show_owner=true&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <a href="https://github.com/dracula/tty">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=dracula&repo=tty&show_owner=true&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <a href="https://github.com/dracula/dunst">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=dracula&repo=dunst&show_owner=true&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <a href="https://github.com/dracula/latex">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=dracula&repo=latex&show_owner=true&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <a href="https://github.com/dracula/ltspice">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=dracula&repo=ltspice&show_owner=true&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <a href="https://github.com/dracula/pandoc">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=dracula&repo=pandoc&show_owner=true&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
            <a href="https://github.com/dracula/freecad">
              <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=dracula&repo=freecad&show_owner=true&theme=dracula&hide_border=true" width="32.7%"/>
            </a>
			<p>
              <center>
                <br />
                Check out&nbsp;
                <a href="https://draculatheme.com">
                  draculatheme.com
                </a> for more themes
              </center>
			</p>
          </div>
        </div>
      </div>
    )
  }
}

Dracula.Layout = Theme;

export default Dracula;
