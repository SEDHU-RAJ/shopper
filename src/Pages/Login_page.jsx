import React from 'react'
import './../Styles/login.css';
const Login_page = () => {
  return (
    <div className='Login'>
      <div className="loginsignupcontainer">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Your Name !'/>
          <input type="email" placeholder='Email Id'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already Have an Account ? <span>Login Here !</span>
        </p>
        <div className="login-agree">
          <input type="checkbox" name='' id=''/> <p>By Continuing , i agree to the terms of use & Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Login_page