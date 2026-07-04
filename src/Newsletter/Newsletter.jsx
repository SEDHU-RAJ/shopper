import React from 'react'
import './Newsletter.css';
const Newsletter = () => {
  return (
    <div className="Newsletter">
        <h1>Get Exclusive Offers On You Email</h1>
        <p>Subscribe To Our Newsletter And Stay Updated</p>
        <div>
            <input type="email" placeholder='Your Email ID'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter