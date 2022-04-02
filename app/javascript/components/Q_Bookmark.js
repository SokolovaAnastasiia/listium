import React from "react"
import PropTypes from "prop-types"
import Q_Bookmark_Solid from '../../assets/images/icons/Q_Bookmark_Solid.svg'
import Q_Bookmark_Empty from '../../assets/images/icons/Q_Bookmark_Empty.svg'

class Q_Bookmark extends React.Component {
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
    const src = this.state.liked ? Q_Bookmark_Solid : Q_Bookmark_Empty
    return (
        <img onClick={this.handleClick} src={src} />
    );
  }
}


export default Q_Bookmark
