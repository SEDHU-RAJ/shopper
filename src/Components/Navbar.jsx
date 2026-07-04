import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/cart_icon.png'
import './../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  const [menuOpen, setMenuOpen] = useState(false)
  const { cartItem = {} } = useContext(ShopContext) || {}
  const totalCount = Object.values(cartItem).reduce((sum, value) => sum + (value || 0), 0)

  const handleLinkClick = (name) => {
    setMenu(name)
    setMenuOpen(false)
  }

  return (
    <>
    <div className="nav">
      <div className="logo_div">
        <img src={logo} />
        <p>Shopper</p>
      </div>

      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '×' : '☰'}
      </button>

      <ul className={`navlist ${menuOpen ? 'open' : ''}`}>
        <li onClick={() => handleLinkClick("shop")}><Link style={{ textDecoration :'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/> : <></>}</li>
        <li onClick={() => handleLinkClick("Mens")}><Link style={{ textDecoration :'none'}} to="/mens">Mens</Link>{menu==="Mens"?<hr/> : <></>}</li>
        <li onClick={() => handleLinkClick("Womens")}><Link style={{ textDecoration :'none'}} to="/womens">Womens</Link> {menu==="Womens"?<hr/> : <></>}</li>
        <li onClick={() => handleLinkClick("Kids")}><Link style={{ textDecoration :'none'}} to='/kids'>Kids</Link> {menu==="Kids"?<hr/> : <></>}</li>
      </ul>
      <div className="login">
        <Link to='/login'><button>LOGIN</button></Link>
        <Link to="/cart"><img src={cart} /></Link>
        <div className="cart_count">{totalCount}</div>
      </div>
      </div>
    </>
  )
}

export default Navbar