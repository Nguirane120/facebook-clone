import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <SidebarRow src="user.png" title="Alioune"/>
        <SidebarRow Icon={ LocalHospital} title="COVID-19 Information Center"/>
        <SidebarRow Icon={EmojiFlags} title="Pages"/>
        <SidebarRow Icon={ People} title="Friends"/>
        <SidebarRow Icon={Chat} title="Messenger"/>
        <SidebarRow Icon={Storefront} title="MarketPlace"/>
        <SidebarRow Icon={VideoLibrary} title="videos"/>
        <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace"/>
    
    </div>
  )
}

export default Sidebar