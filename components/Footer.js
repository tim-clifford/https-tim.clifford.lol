import { Component } from 'react';

class Footer extends Component {
  render() {
    return <div style={{ background: '#20222b', padding: '60px 0' }}>
      <p className="credits">
		Design is from <a className="cyan" href="https://draculatheme.com" target="blank">draculatheme.com</a>,
		<br />
		made with <span className="love">♥</span> by <a className="green" href="https://zenorocha.com" target="blank">Zeno Rocha</a>
        <br />
		under <a className="orange" href="http://zenorocha.mit-license.org/" target="blank">MIT license</a>
      </p>
    </div>
  }
}

export default Footer;
