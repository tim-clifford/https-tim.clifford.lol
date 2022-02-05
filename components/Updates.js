// vi: sts=2 sw=2 et
import { Component } from 'react';
import { withRouter } from 'next/router'

class Updates extends Component {
  render() {
    let title = 'Stay up to date';
    let description = 'All the rants, straight to your inbox';
    return <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <form method="post" action="/subscribe.php" className="form">
        <input name="email" placeholder="Your email address" type="email"/>
        <input type="hidden" name="return-path" value={this.props.router.asPath}/>
        <input type="submit" name="email-button" value="Subscribe"/>

      </form>
    </div>


  }
}

export default withRouter(Updates);

