import React from "react"
import PropTypes from "prop-types"

class Q_CoverMain extends React.Component {
  render () {
    return (
      <div className='Q_CoverMain'>
        <p className='Q_CoverMain_title'>Найди плейлист себе по вкусу</p>
        <p className='Q_CoverMain_description'>В Listium ты можешь найти миллионы плейлистов себе под настроение.</p>
        <div className='Q_CoverMain_bnts'>
          <div className='Q_CoverMain_More'>Подробнее</div>
          <div className='Q_CoverMain_Reg'>Регистрация</div>
        </div>

      </div>
    );
  }
}

export default Q_CoverMain
