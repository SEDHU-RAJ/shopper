import React, { useState } from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/cart_icon.png'
import './../Styles/Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const[menu , setMenu] = useState("shop")
  return (
    <>
    <div className="nav">
      <div className="logo_div">
        <img src={logo} />
        <p>Shopper</p>
      </div>
      
      <ul className="navlist">
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration :'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/> : <></>}</li>
        <li onClick={()=>{setMenu("Mens")}}><Link style={{ textDecoration :'none'}} to="/mens">Mens</Link>{menu==="Mens"?<hr/> : <></>}</li>
        <li onClick={()=>{setMenu("Womens")}}><Link style={{ textDecoration :'none'}} to="/womens">Womens</Link> {menu==="Womens"?<hr/> : <></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link style={{ textDecoration :'none'}} to='/kids'>Kids</Link> {menu==="Kids"?<hr/> : <></>}</li>
      </ul>
      <div className="login">
        <Link to='/login'><button>LOGIN</button></Link>
        <Link to="/cart"><img src={cart} /></Link>
        <div className="cart_count">0</div>
      </div>
      </div>
    </>
  )
}

export default Navbar