import React from 'react'
import { useState } from 'react'

const SignInPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logInMessage, setLogInMessage] = useState('');

  const API_BASE_URL = 'https://ecommerce-k7mi2hxhe-dereje-gudisas-projects.vercel.app/signInPage';

  const handleSignIn = async (e)=>{
    e.preventDefault();
    
    try{
      console.log("hey")
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok){
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user))
        console.log('token securely saved');

        setLogInMessage(`Success! Welcome back.`);
        console.log("Logged in user details:", data);
        
      } else { setLogInMessage(`❌ Error: ${data.message}`)}

    } catch(error){
        setLogInMessage(error.message);
        console.log(error)
    }

  }

  return (
    <>
      <div className='sign-in-page'>
        <div className="sign-in-header">
          <h2>Log In</h2>
        </div>
        <div className="email-password-container">
          <input type="text" className='sign-in-email-input' placeholder='Email' id="email" value = {email} onChange={(e)=> setEmail(e.target.value)}/>

          <input type="text" className='sign-in-password-input' placeholder='Password' id="password" value = {password} onChange={(e)=> setPassword(e.target.value)}/>
        </div>

        <div className="remember-me-container">
          <span className='remember-chekbox'>
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </span>
          <a href="/forgotPassword">forgot password</a>
        </div>

        <button className='sign-in-button' onClick={handleSignIn}>Log In</button><br />
        <label htmlFor="button">
          Don't have an account? 
          <a href="/signUp" className='sign-up-link'>Sign Up</a>
        </label>
        <p className="feedback-message">{logInMessage}</p>
      </div>
    </>
    
  )
}

export default SignInPage