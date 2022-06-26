import React from "react"
import PropTypes from "prop-types"
import Q_Spotify from '../../assets/images/icons/logo-spotify.png'
import Q_Sber from '../../assets/images/icons/logo-sber.png'
import Q_Yandex from '../../assets/images/icons/logo-yandex.png'
import Q_Boom from '../../assets/images/icons/logo-boom.png'

class Q_Link extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        service : props.service ? props.service : 'spotify',
        link : props.link ? props.link : 'google.com',
      };

  }
  render () {
    let src = 'spotify';
    switch (this.state.service) {
      case 'spotify':
        src = "Q_Spotify";
        break;
      case 'sber':
        src = "Q_Sber";
        break;
      case 'yandex':
        src = "Q_Yandex";
        break;
      case 'boom':
        src = "Q_Boom";
        break;
    }
    return (
      <a href={`https://${this.state.link}`}>
        <div className= {`Q_Link  ${src}`} >
        </div>
      </a>

    );
  }
}

export default Q_Link
