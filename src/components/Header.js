import { Avatar, IconButton } from '@material-ui/core'
import { Add, ExpandMore, Flag, Forum, Home, Notifications, Search, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircleSharp } from '@material-ui/icons'
import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className="header">
        <div className="header_left">
            <img src="fb-lo.png" alt="" />
           <div className="header_input">
           <Search/>
            <input type="text" name="" id="" placeholder='Search facebook' />
           </div>
        </div>
        <div className="header_center">
            <div className="header_option header-option-active">
            <Home size="large"/>
            </div>
            <div className="header_option">
            <Flag size="large"/>
            </div>
            <div className="header_option">
            <SubscriptionsOutlined size="large"/>
            </div>
            <div className="header_option">
            <StorefrontOutlined size="large"/>
            </div>
            <div className="header_option">
            <SupervisedUserCircleSharp size="large"/>
            </div>
        </div>
        <div className="header_right">
            <div className="header_info">
                <Avatar/>
                <h3>Alioune</h3>
            </div>
                <IconButton>
                    <Add/>
                </IconButton>
                <IconButton>
                    <Forum/>
                </IconButton>
                <IconButton>
                    <Notifications/>
                </IconButton>
                <IconButton>
                    <ExpandMore/>
                </IconButton>
        </div>
    </div>
  )
}

export default Header