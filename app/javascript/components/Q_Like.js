import React from "react"
import PropTypes from "prop-types"
import Q_Like_Solid from '../../assets/images/icons/Q_Like_Solid_white.svg'
import Q_Like_Empty from '../../assets/images/icons/Q_Like_Empty.svg'
// import Q_Like_Solid from '../../assets/images/icons/Q_Like_Solid.svg'
// import Q_Like_Empty from '../../assets/images/icons/Q_Like_Empty.svg'

class Q_Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked : props.liked ? props.liked : false,
      likes_counter : props.likes_counter ? props.likes_counter : 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    const label = this.state.liked ? 'Unlike' : 'Like'
    const src = this.state.liked ? Q_Like_Solid : Q_Like_Empty
    return (
        <img onClick={this.handleClick} src={src} />
    );
  }
}


export default Q_Like
