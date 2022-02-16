import React from 'react'
import Story from './Story'
import './StoryRel.css'

const StoryRel = () => {
  return (
    <div className="storyRel">
        <Story profile="profile1.png" title="Modou" image="bg1.jpeg" />
        <Story profile="profile2.jpeg" title="Cheikh" image="bg2.jpeg"/>
        <Story profile="profile3.jpeg" title="Sophine" image="bg3.jpeg"/>
        <Story profile="profile3.jpeg" title="Fatou" image="bg4.jpeg"/>
        <Story profile="profile3.jpeg" title="Aida" image="bg5.jpeg"/>
        <Story profile="profile3.jpeg" title="Ibou" image="bg6.jpeg"/>
        <Story profile="profile3.jpeg" title="Sophine" image="bg3.jpeg"/>
    </div>
  )
}

export default StoryRel