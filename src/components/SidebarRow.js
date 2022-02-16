import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarRow.css'

function SidebarRow({ src, title, Icon}) {
  return (
    <div className="sideBarRow">
        { src && <Avatar src={ src }/>}
        { Icon && <Icon/>}
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow