import React from "react"
import PropTypes from "prop-types"
import Q_Home from '../../assets/images/icons/Q_Home.svg'

class Q_Icon_Home extends React.Component {

    render() {
      return (
          <a href = '/posts'>
          <img src={Q_Home} />
          </a>

      );
    }
}
export default Q_Icon_Home
