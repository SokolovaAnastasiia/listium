import React from "react"
import PropTypes from "prop-types"
import Q_Logo from './Q_Logo'
import A_Search from './A_Search'
import Q_Icon_Home from './Q_Icon_Home'
import Q_Icon_Heart from './Q_Icon_Heart'
import Q_Icon_Search from './Q_Icon_Search'
import Q_Icon_UserPic from './Q_Icon_UserPic'
class O_Header extends React.Component {
    render() {
      return (
          <div className='O_Header'>
              <Q_Logo />
              <div className='icons'>
                    <Q_Icon_Search />
                    <Q_Icon_Home />
                    <Q_Icon_Heart />
                    {this.props.auth ?
                        <Q_Icon_UserPic data = {this.props.current_user.id}/> :
                        <Q_Icon_UserPic data = {'sign_in'}/>
                    }
              </div>
          </div>
      );
    }
}

export default O_Header
