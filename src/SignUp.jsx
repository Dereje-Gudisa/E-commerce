import React from 'react';

const SignUp = () => {
  return (
    <>
    <div className='sign-up-page'>
        <div className="sign-in-header">
          <h2>Sign Up</h2>
        </div>
        <div className="email-password-container">
          <input type="text" className='sign-up-email-input' placeholder='Enter Your Name' id="email" />
          <input type="text" className='sign-in-password-input' placeholder='Enter Your Phone Number' id="password" />
          <input type="text" className='sign-up-email-input' placeholder='Email' id="email" />
          <input type="text" className='sign-in-password-input' placeholder='Password' id="password" />
        </div>

        <div className="checkbox-container">
          
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="remember">Agree to Terms & Policies</label>
          
        </div>

        <button className='sign-in-button'>Sign Up</button><br />
        <label htmlFor="button">
          I already have an account
          <a href="/signIn" className='sign-up-link'>Log In</a>
        </label>
        
      </div>
    </>
  )
}

export default SignUp