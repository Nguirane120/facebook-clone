import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, VideocamOff } from '@material-ui/icons'
import React from 'react'
import './MessageSender.css'

const MessageSender = () => {
    const handleSubmit = e =>{
        e.preventDefault()
    }
  return (
    <div className="messageSender">
        <div className="messageSender_top">
            <Avatar/>
            <form action="">
                <input type="text" placeholder='whats on your name' />
                <input type="text" placeholder='URL image' />
                <button type="submit" onClick={handleSubmit}>Valid</button>
            </form>
        </div>
        <div className="messageSender_button">
            <div className="messsageSender_option">
            <VideocamOff style={{ color: 'red'}}/>
            <h3>Live video</h3>
            </div>
            <div className="messsageSender_option">
                <PhotoLibrary style={{ color:"green"}} />
                <h3>Photo/Video</h3>
            </div>
            <div className="messsageSender_option">
                <InsertEmoticon style={{ color:"orange"}} />
                <h3>Activity/Feeling</h3>
            </div>
        </div>
    </div>
  )
}

export default MessageSender