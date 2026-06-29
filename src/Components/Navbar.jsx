import React from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/cart_icon.png'
const Navbar = () => {
  return (
    <>
      <div className="logo">
        <img src={logo} />
        <p>Shopper</p>
      </div>
      <ul className="navlist">
        <li>Mens</li>
        <li>Womens</li>
        <li>Kids</li>
        <li>Shop</li>
      </ul>
      <div className="login">
        <button>LOGIN</button>
        <img src={cart} alt="" />
      </div>
    </>
  )
}

export default Navbar