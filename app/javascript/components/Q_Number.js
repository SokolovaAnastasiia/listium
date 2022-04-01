import React from "react"
import PropTypes from "prop-types"

class Q_Number extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        q_number1 : props.q_number1,
        q_number2 : props.q_number2,
      };

    }
  render () {
    let className1 = 'Q_Number Q_Number1';
    switch (this.state.q_number1) {
      case '0':
        className1 += ' Q_Number_0'
        break;
      case '1':
        className1 += ' Q_Number_1'
        break;
      case '2':
        className1 += ' Q_Number_2'
        break;
      case '3':
        className1 += ' Q_Number_3'
        break;
      case '4':
        className1 += ' Q_Number_4'
        break;
      case '5':
        className1 += ' Q_Number_5'
        break;
      case '6':
        className1 += ' Q_Number_6'
        break;
      case '7':
        className1 += ' Q_Number_7'
        break;
      case '8':
        className1 += ' Q_Number_8'
        break;
      case '9':
        className1 += ' Q_Number_9'
        break;
      default:
        className1 += ' Q_Number_0'
        break;
    }
    let className2 = 'Q_Number Q_Number2';
    switch (this.state.q_number2) {
      case '0':
        className2 += ' Q_Number2_0'
        break;
      case '1':
        className2 += ' Q_Number2_1'
        break;
      case '2':
        className2 += ' Q_Number2_2'
        break;
      case '3':
        className2 += ' Q_Number2_3'
        break;
      case '4':
        className2 += ' Q_Number2_4'
        break;
      case '5':
        className2 += ' Q_Number2_5'
        break;
      case '6':
        className2 += ' Q_Number2_6'
        break;
      case '7':
        className2 += ' Q_Number2_7'
        break;
      case '8':
        className2 += ' Q_Number2_8'
        break;
      case '9':
        className2 += ' Q_Number2_9'
        break;
      default:
        className2 += ' Q_Number2_0'
        break;
    }
    return (
        <div className='Q_Numbers'>
          <div className={className1}></div>
          <div className={className2}>
          </div>
        </div>

    );
  }
}

export default Q_Number
