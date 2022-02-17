import React from 'react'
import StoryRel from './StoryRel'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'

const Feed = () => {
  return (
    <div className="feed">
        <StoryRel/>
        <br />
        <MessageSender/>
        <Post profile="profile2.jpeg" message="This work" 
        timestamp="This is the timesTamp" username="Nguirane" image="img1.jpeg"/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Feed