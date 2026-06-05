import React from 'react';
import {useState} from 'react';


const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    console.log("on submit clicked")

    try {
      // 1. Send the data to your local backend server API
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Tells the backend we are sending JSON data
        },
        body: JSON.stringify({ name, email, password, phone }), // Converts JS object to JSON string
      });

      // 2. Parse the receipt sent back by the backend
      const data = await response.json();

      if (response.ok) {

        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user))
        console.log('sign up token securely saved');
        setMessage(`🎉 Success! Welcome ${data.user.name}.`);

      } else {
        // Error handling (e.g., User already exists)
        setMessage(`❌ Error: ${data.message}`);
      }


    } catch (error){
      setMessage(error.message);
      console.log(error.message);
    }
  }

  return (
    <>
    <div className='sign-up-page'>
        <div className="sign-in-header">
          <h2>Sign Up</h2>
        </div>
        <div className="email-password-container">
          <input type="text" className='sign-up-email-input' placeholder='Enter Your Name' id="signUpName" value = {name} onChange={(e) => setName(e.target.value)}/>

          <input type="text" className='sign-in-password-input' placeholder='Enter Your Phone Number' id="signUpPhone" value = {phone} onChange={(e) => setPhone(e.target.value)}/>

          <input type="text" className='sign-up-email-input' placeholder='Email' id="signUpEmail" value = {email} onChange={(e) => setEmail(e.target.value)}/>

          <input type="text" className='sign-in-password-input' placeholder='Password' id="signUpPassword" value = {password} onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className="checkbox-container">
          
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="remember">Agree to Terms & Policies</label>
          
        </div>

        <button className='sign-in-button' onClick={handleSignUpSubmit}>Sign Up</button><br />
        <label htmlFor="button">
          I already have an account
          <a href="/signIn" className='sign-up-link'>Log In</a>
        </label>
        <p className="feedback-message">{message}</p>
      </div>
    </>
  )
}

export default SignUp