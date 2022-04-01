import React from "react"
import PropTypes from "prop-types"
class A_Tag extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        tag : props.tag ? props.tag : 'Вечеринка',
      };

  }
  render () {
    return (
      <div>{this.state.tag}</div>
    );
  }
}

export default A_Tag
