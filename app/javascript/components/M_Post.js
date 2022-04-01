import React from "react"
import PropTypes from "prop-types"
import A_Cover from './A_Cover'
import A_Tag from './A_Tag'
class M_Post extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        title : props.title ? props.title : 'Тебе для хорошего настроения',
        tracks : props.tracks ? props.tracks : parseInt('00',8),
        tags : props.tags ? props.tags : ['LoFi', 'Вечеринка'],
      };

  }
  render () {
    let tracks= this.state.tracks;
    // удалить, когда будет готов бэкенд
    function randomIntFromInterval(min, max) { // min and max included
      let x = Math.floor(Math.random() * (max - min + 1) + min)
      if (x <= 9) {
        return '0'+ x.toString();
      }
      else {
        return x;
      }
    }
    // вот до сюда

    tracks = randomIntFromInterval(0, 99)
    return (
      <div className='M_Post'>
        <a href='#'>
        <A_Cover tracks={tracks.toString()} />
        </a>
        <div className='info'>
          <div className='datas'>
            <a href={`/posts/${this.props.post.id}`} className='title'>
              {this.state.title}
            </a>
            <span className='tracks'>
              {tracks} треков
            </span>
          </div>
          <div className='tags'>
          <A_Tag tag={this.state.tags[0]} />
          <A_Tag tag={this.state.tags[1]} />
          </div>
        </div>
      </div>
    );
  }
}

export default M_Post
