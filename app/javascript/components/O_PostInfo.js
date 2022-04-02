import React from "react"
import PropTypes from "prop-types"
import A_Cover from './A_Cover'
import A_Tag from './A_Tag'
import Q_Like from './Q_Like'
import Q_Bookmark from './Q_Bookmark'
import Q_Share from './Q_Share'
import A_Author from './A_Author'
class O_PostInfo extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        title : props.title ? props.title : 'Плейлист',
        tags : props.tags ? props.tags : ['LoFi', 'Вечеринка'],
        description : props.description ? props.description : 'норм',
        author : props.author ? props.author : 'норм',
        nickname : props.authordata.username ? props.authordata.username : 'dimaskins'
      };

  }
  render () {
    return (
      <div className='O_PostInfo'>
        <A_Cover/>
        <div className='info'>
          <span className='title'>{this.state.title}</span>
          <div className='tags'>
            <A_Tag tag={this.state.tags[0]} size='A_Tag_Big'/>
            <A_Tag tag={this.state.tags[1]} size='A_Tag_Big'/>
          </div>
          <div className='description'>
            <span className='title'>Описание</span>
            <div className='text' dangerouslySetInnerHTML={{__html: this.state.description}}></div>
          </div>
          <div className='reaction'>
            <Q_Like />
            <Q_Bookmark />
            <Q_Share />
          </div>
        </div>
        <div className='sideInfo'>
          <a href={`/users/${this.state.author}`}>
          <A_Author nickname={this.state.nickname}/>
          
          </a>
        </div>
      </div>
    );
  }
}

export default O_PostInfo
