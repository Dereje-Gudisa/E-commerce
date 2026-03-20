import React from 'react'

const SignInPage = () => {
  return (
    <>
      <div className='sign-in-page'>
        <div className="sign-in-header">
          <h2>Log In</h2>
        </div>
        <div className="email-password-container">
          <input type="text" className='sign-in-email-input' placeholder='Email' id="email" />

          <input type="text" className='sign-in-password-input' placeholder='Password' id="password" />
        </div>

        <div className="remember-me-container">
          <span className='remember-chekbox'>
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </span>
          <a href="/forgotPassword">forgot password</a>
        </div>

        <button className='sign-in-button'>Log In</button><br />
        <label htmlFor="button">
          Don't have an account? 
          <a href="/signUp" className='sign-up-link'>Sign Up</a>
        </label>
        
      </div>
    </>
    
  )
}

export default SignInPage