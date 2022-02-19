import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, VideocamOff } from '@material-ui/icons'
import React, { useState } from 'react'
import { useStateValue } from '../StateProvider'
import { db } from './Firebase'
import './MessageSender.css'
import firebase from 'firebase'

const MessageSender = () => {

    const [ {user}, dispatch] =  useStateValue()

   const [ input, setInput] =  useState('')
   const [ imageUrl, setImageUrl] =  useState('')


    const handleSubmit = e =>{
        e.preventDefault()

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput("")
        setImageUrl("")
    }
  return (
    <div className="messageSender">
        <div className="messageSender_top">
            <Avatar src={ user.photoURL}/>
            <form action="">
                <input type="text" value={ input} onChange={(e) => setInput(e.target.value)} placeholder={ ` what's on your mind ${ user.displayName}`} />
                <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} type="text" placeholder='URL image' />
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