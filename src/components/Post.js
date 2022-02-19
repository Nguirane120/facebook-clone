import { Avatar } from '@material-ui/core'
import { AccountCircle, ChatBubbleOutline, ExpandMore, ThumbUp } from '@material-ui/icons'
import React from 'react'
import './POst.css'
const Post = ({ image, profile, username, timestamp, message}) => {
  return (
    <div className="post">
        <div className="post_top">
            <Avatar src={ profile} className="post_avata"/>
            <div className="post_topInfo">
                <h3>{ username }</h3>
                <p>
                    {
                        new Date(timestamp?.toDate()).toUTCString()
                    }
                </p>
            </div>
        </div>
        <div className="post_buttom">
            <p>{ message }</p>
        </div>
        <div className="post_image">
            <img src={ image } alt="" />
        </div>

        <div className="post_options">
            <div className="post_option">
                <ThumbUp/>
                <p>Like</p>
            </div>
            <div className="post_option">
                <ChatBubbleOutline/>
                <p>Comment</p>
            </div>
            <div className="post_option">
                <AccountCircle/>
                <ExpandMore/>
               
            </div>
        </div>

    </div>
  )
}

export default Post