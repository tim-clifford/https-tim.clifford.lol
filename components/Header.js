import { Component } from 'react';
import Link from 'next/link';
import Topbar from './Topbar';
import GitHubButton from 'react-github-btn';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <Topbar />
      <header className="header">
        <h1 className="title">{this.props.query.title}</h1>
      </header>
    </div>
  }
}

export default Header;
