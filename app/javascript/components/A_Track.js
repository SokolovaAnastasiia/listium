import React from "react"
import PropTypes from "prop-types"
class A_Track extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        number : props.number ? props.number : '01',
        singer : props.singer ? props.singer : 'Lana Del Rey',
        song : props.song ? props.song : 'Summertime sadness'
      };

  }
  render () {
    return (
      <div className="track">
        <div className="number">{this.state.number}</div>
        <div className="data">
          <div className="singer">{this.state.singer}</div>
          <div className="song">{this.state.song}</div>
        </div>
      </div>
    );
  }
}

export default A_Track
