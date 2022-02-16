import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'

const Story = ({ image, profile, title}) => {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})`}}>
        <Avatar className='story_avatar' src={ profile}/>
        <h4>{title}</h4>
    </div>
  )
}

export default Story