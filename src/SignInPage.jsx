import React from 'react'

const SignInPage = () => {
  return (
    <>
      <div className='sign-in-page'>
        <h1>Welcome back</h1>
        <p>please enter you details.</p>
        <div className="email-password-container">
          <input type="text" className='sign-in-email-input' placeholder='Email' id="email" />

          <input type="text" className='sign-in-password-input' placeholder='Password' id="password" />
        </div>

        <input type="checkbox" name="remember" id="remember" />
        <label htmlFor="remember">Remember me</label>

        <a href="/forgotPassword">forgot password</a><br />

        <button className='sign-in-btn'>Log In</button><br />
        <label htmlFor="button">Don't have an account? </label>
        <a href="/signUp">Sign Up</a>
      </div>
    </>
    
  )
}

export default SignInPage