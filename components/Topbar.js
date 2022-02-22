import { Component } from 'react';
import Link from 'next/link';
import styles from './Topbar.module.css';

class Topbar extends Component {
  render() {
    return <div className={styles.fixed}>
      <nav className={styles.topbar}>
        <Link href="/">
          <a className="topbar-title"><img className="topbar-img" src="/avatar.png"/></a>
        </Link>
        <ul>
          <li>
            <Link href="/dracula">
              <a>Dracula</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
              <a href="https://sr.ht/~tim-clifford" className={styles.cta}>SourceHut</a>
          </li>
        </ul>
      </nav>
    </div>
  }
}

export default Topbar;
