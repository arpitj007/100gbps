import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from  './100gbps-logo.png'
import './Navbar.css'
function Navbar() {
    const handleMouseOver = () => {
        return 
    }

    return (
       <>
       <nav className="navbar">
           <div className="navbar-container">
               <div className="top-navbar">
                   <div className="top-navbar-left">
                        <button className="promo-button">
                            PROMO
                        </button>
                        <p className="promo-text">Get 10% off on all annual orders.</p>
                        <i className="fas fa-chevron-right"></i>
                   </div>
                   <div className="top-navbar-right">
                       <i className="fas fa-phone-alt"></i>
                       <p className="promo-phone">+91 1234567890</p>
                       <i className="fas fa-envelope"></i>
                       <p className="promo-email">info@100gbps.org</p>
                   </div>
               </div>
               <div className="bottom-navbar">
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt="100gbps Logo"/>
                    </Link>
                    <ul className="navbar-menu">
                        <Link className="link-class" to="/dedicated-server">
                            <li className="navbar-item" onMouseOver={handleMouseOver}>Dedicated Server<i className="fas fa-angle-down"></i></li>
                        </Link>
                        <Link className="link-class" to="/reseller-program">
                            <li className="navbar-item">Reseller</li>
                        </Link>
                        <Link className="link-class" to="/about">
                            <li className="navbar-item">About</li>
                        </Link>
                        <Link className="link-class" to="/contact">
                            <li className="navbar-item">Contact</li>
                        </Link>
                    </ul>
               <button className="button-small">Login <i className="fas fa-arrow-right"></i></button>
               </div>
           </div>
       </nav>
       </>
    )
}

export default Navbar
