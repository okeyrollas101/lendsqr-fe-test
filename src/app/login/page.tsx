"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import GroupIcon from '@/app/Assets/Group.svg'
import PabloSignIn from '@/app/Assets/pablo-sign-in 1.svg'
import './login.css'

const Login = () => {
  const [email, setEmail] = useState("");

   // Track the password input and visibility state
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);

   // Toggle visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
     <div className='login'>
        <div className="left_login">
          <Image src={GroupIcon} alt='' className='group_icon'/>
          <Image src={PabloSignIn} alt='' className='pablo_sign'/>
        </div>
        <div className="right_login">
          <h3>Welcome!</h3>
          <p>Enter details to login.</p>
           
          <form action="">
            <div className='input'>
              <input type="text" value={email} placeholder='Email' onChange={e => setEmail(e.target.value)} className='email_input'/>
              <input type={showPassword ? 'text' : 'password'} value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} className='password_input'/>
              <button onClick={togglePasswordVisibility} type='button' aria-label={showPassword ? "Hide password" : "Show password"} className='toggle_button'>{showPassword ? "HIDE" : "SHOW"}</button>
            </div>
            <p className='forgot_password'>FORGOT PASSWORD?</p>
            <button className='button'>LOG IN</button>
          </form>
        </div>
     </div>
  )
}

export default Login
