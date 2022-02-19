import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {  auth, provider } from './Firebase';
import { useStateValue } from '../StateProvider';
import { actionType } from '../reducer';


const Login = () => {

    const [ state ,dispatch] =  useStateValue()



    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type:actionType.SET_USER,
                user: result.user
            })
            console.log(result.additionalUserInfo.profile)
        })
        .catch( error => console.log(error.message))
    }

  return (
   <div className="login">
       <div className="login_logo">
           <img src="fb-lo.png" alt="" />
           <img src="txtfb.png" alt="" />
       </div>
       
       <Button type="submit" className='button' onClick={signIn}>Login</Button>
   </div>
  )
}

export default Login