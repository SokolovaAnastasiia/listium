import React from "react"
import PropTypes from "prop-types"
class A_Tag extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        tag : props.tag ? props.tag : 'Вечеринка',
        size : props.size ? props.size : '',
      };
  }
  render () {
    
    return (
      <div className={`A_Tag ${this.state.size}`}>{this.state.tag}</div>
    );
  }
}

export default A_Tag
