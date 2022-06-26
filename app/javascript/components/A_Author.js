import React from "react"
import PropTypes from "prop-types"
class A_Author extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name : props.name ? props.name : 'Дмитрий',
        nickname : props.nickname ? props.nickname : 'dimaskins'
      };

  }
  render () {
    return (
      <div className='A_Author'>
        <div className='userPic'></div>
        <div className='user_info'>
          <a className='name'>{this.state.name}</a>
          <a className='nickname'>@{this.state.nickname}</a>
          <p className='description'>
            Эксперт по музыкальным направлениям, преподаватель истории музыки НИУ ВШЭ
          </p>
        </div>
      </div>
    );
  }
}

export default A_Author
