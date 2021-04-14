// vi: sts=2 sw=2 et
import { Component } from 'react';
import Link from 'next/link';
import Topbar from './Topbar';
import GitHubButton from 'react-github-btn';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  subtitle() {
    if (this.props.query.subtitle != null) {
      return <h2 className="subtitle" >
          <a href={this.props.query.subtitle_link} style={{color: this.props.query.subtitle_color}}>
            {this.props.query.subtitle}
          </a>
        </h2>
    } else {
      return null
    }
  }
  render() {
    return <div>
      <Topbar />
      <header className="header">
        <h1 className="title">{this.props.query.title}</h1>
        {this.subtitle()}
      </header>
    </div>
  }
}

export default Header;
