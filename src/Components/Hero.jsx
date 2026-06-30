import React from 'react'
import './../Styles/Hero.css';
import herohand from './../assets/hand_icon.png';
import arrow from './../assets/arrow.png';
import hero_img from './../assets/hero_image.png';
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrival'S Only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={herohand} alt="" />
                </div>
                <p>Collections</p>
                <p>For EveryOne</p>
            </div>
            <div className="hero-latest-button">
                <div>Latest Collection</div>
                <img src={arrow} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero