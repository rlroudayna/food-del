import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt=""/>
            <p>Order your favorite meals online with ease! Fast delivery to your door and a seamless, reliable experience every time.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
            <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us </li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
           
        </div>
    <div className="footer-content-right">
        <h2>Get IN TOUCH</h2>
        <ul>
            <li>+212-747-635-810</li>
            <li>contact@roudayna.com</li>
            
        </ul>
    </div>
</div> 
<hr />
<p className="footer-copyright"> Copyright 2024 © Roudayna.com - All Right Reserved.</p>
</div>
  )
}

export default Footer
