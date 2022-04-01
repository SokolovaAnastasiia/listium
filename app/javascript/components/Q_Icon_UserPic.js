import React from "react"
import PropTypes from "prop-types"
import Q_UserPic_White from '../../assets/images/icons/Q_UserPic_White.svg'

class Q_Icon_UserPic extends React.Component {

    render() {
      return (
          <a href = {`/users/${this.props.data}`}>
          <img src={Q_UserPic_White} />
          </a>

      );
    }
}
export default Q_Icon_UserPic
