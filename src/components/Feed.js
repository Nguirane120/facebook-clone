import React, { useEffect, useState } from 'react'
import StoryRel from './StoryRel'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import { db } from './Firebase'



const Feed = () => {

  const [posts, setPosts] = useState([])


useEffect(() =>{
  db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
    setPosts(snapshot.docs.map( doc =>(
      { id: doc.id, data: doc.data()}
    )))
  })

}, [])



  return (
    <div className="feed">
        <StoryRel/>
        <br />
        <MessageSender/>
        {
          posts.map( post =>{
           return(
            <Post key={post.id} profile={ post.data.profilePic} message={post.data.message} 
            timestamp={post.data.timestamp} username={ post.data.username} image={ post.data.image}/>
           )
         })
        }

        
      
    </div>
  )
}

export default Feed