// vi: sts=2 sw=2 et
import { Component } from 'react';

class Updates extends Component {
  render() {
    let title = 'Stay up to date';
    let description = 'All the rants, straight to your inbox';
    return <div >
      <h3>{title}</h3>
      <p>{description}</p>
      <form method="post" action="https://lists.srcf.net/mailman/subscribe/tc565-blog" className="form">
        <input name="email" placeholder="Your email address" type="email"/>
        <input type="submit" name="email-button" value="Subscribe"></input>
      </form>
    </div>


  }
}

export default Updates;

