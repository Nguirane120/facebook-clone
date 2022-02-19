import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons'
import React from 'react'
import { useStateValue } from '../StateProvider'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

const Sidebar = () => {
  const [ {user}, dispatch] =  useStateValue()
  return (
    <div className="sidebar">
        <SidebarRow src={ user.photoURL} title={ user.displayName }/>
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