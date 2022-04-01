import React from "react"
import PropTypes from "prop-types"
import Q_SearchIcon from '../../assets/images/icons/Q_SearchIcon.svg'

class Q_Icon_Search extends React.Component {

    render() {
      return (
          <a href = '/posts'>
          <img src={Q_SearchIcon} />
          </a>

      );
    }
}
export default Q_Icon_Search
