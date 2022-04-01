import React from "react"
import PropTypes from "prop-types"
import Q_Heart_White from '../../assets/images/icons/Q_Heart_White.svg'

class Q_Icon_Heart extends React.Component {

    render() {
      return (
          <a href = '/posts'>
          <img src={Q_Heart_White} />
          </a>

      );
    }
}
export default Q_Icon_Heart
