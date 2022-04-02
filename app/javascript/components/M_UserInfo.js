import React from "react"
import PropTypes from "prop-types"
import Q_ProfilePic from './Q_ProfilePic'
class M_UserInfo extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        username : props.user.username ? props.user.username : 'user1',
        followers : props.followers ? props.followers : '0',
        followees : props.followees ? props.followees : '0'

      };

  }
  render () {
    const name = 'Дмитрий Головкин';
    const description = 'На этом канале вы найдёте многое о музыке. Я собрала плейлисты с самыми различными жанрами, разделёнными по годам. Так что это может помочь вам разобраться с историей музыки. Подписывайтесь!';
    return (
      <div className='M_UserInfo'>
        <Q_ProfilePic />
        <span className='name'>{name}</span>
        <span className='username'>@{this.state.username}</span>
        <div className='stats'>
          <div>
            <div className='num'>{this.state.followers}</div>
            <div className='cap'>подписчиков</div>
          </div>
          <div>
            <div className='num'>{this.state.followees}</div>
            <div className='cap'>подписок</div>
          </div>
        </div>
        <p>{description}</p>
      </div>
    );
  }
}

export default M_UserInfo
