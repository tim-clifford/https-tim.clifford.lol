// vi: sts=2 sw=2 et
import { Component } from 'react';

class Updates extends Component {
  render() {
    let title = 'Stay up to date';
    let description = 'All my rants, straight to your inbox.';
    return <div >
      <h3>{title}</h3>
      <p>{description}</p>

      <iframe class="mj-w-res-iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://app.mailjet.com/widget/iframe/6FKH/Izn" width="100%"></iframe>
      <script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js"></script>

    </div>


  }
}

export default Updates;

