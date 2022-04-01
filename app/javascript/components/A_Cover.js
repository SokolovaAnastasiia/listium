import React from "react"
import PropTypes from "prop-types"
import Q_Number from './Q_Number'
class A_Cover extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        tracks : props.tracks,
        background : props.color ? props.color : '#EBC068',
        description : props.description ? props.description : 'Вам точно понравится этот плейлист'
      };

  }
  render () {
    const q1 = this.state.tracks[0];
    const q2 = this.state.tracks[this.state.tracks.length - 1];
    const background = this.state.background;

    var obj = {
      c2: '#FABBC1',
      c3: '#EBC068',
      c4: '#71DA5B',
      c5: '#EE754A',
      c6: '#AAB6FF',
    };

    function getRandomProperty(obj) {
      const keys = Object.keys(obj);
      return keys[Math.floor(Math.random() * keys.length)];
    }

    const description = this.state.description;
    return (
      <div className='A_Cover' style={{ backgroundColor: `${obj[getRandomProperty(obj)]}` }}>
        <Q_Number q_number1={q1} q_number2={q2} />
        <div className='description'>{description}</div>
      </div>
    );
  }
}

export default A_Cover
