import React from 'react'
import './Footer.css';
import footer_logo from './../assets/logo_big.png';
import insta from './../assets/instagram_icon.png';
import pintrest from './../assets/pintester_icon.png';
import whatsapp from './../assets/whatsapp_icon.png';
const Footer = () => {
  return (
    <div className="footer">
        <div className="footerlogo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footerlinks">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footericons">
            <div className="footercontainers">
                <img src={insta} alt="" />
            </div>
            <div className="footercontainers">
                <img src={whatsapp} alt="" />
            </div>
            <div className="footercontainers">
                <img src={pintrest} alt="" />
            </div>
        </div>
        <div className="footercopright">
            <hr />
            <p>Copyright @ 2026 All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer