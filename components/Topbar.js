import { Component } from 'react';
import Link from 'next/link';
import styles from './Topbar.module.css';

class Topbar extends Component {
  render() {
    return <div className={styles.fixed}>
      <nav className={styles.topbar}>
        <Link href="/">
          <a className="topbar-title">About</a>
        </Link>
        <ul>
          <li className={styles.items}>
            <Link href="/dracula">
              <a>Dracula</a>
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
              <a href="https://github.com/tim-clifford" className={styles.cta}>GitHub</a>
          </li>
        </ul>
      </nav>
    </div>
  }
}

export default Topbar;
