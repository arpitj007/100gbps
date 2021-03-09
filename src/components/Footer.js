import React from 'react'
import './Footer.css'
import logo from './100gbps-logo.png'

function Footer() {
    return (
        <>
        <hr className="footer-upperline"/>
            <div className="footer">
                <div className="footer-left">
                    <img className="footer-logo" src={logo} alt="logo-100gbps" />
                    <p className="footer-left-text">© 2021 100GBPS. All rights reserved.</p>
                    <p className="footer-left-text">Prices are listed without VAT</p>
                    <p className="footer-left-sitemap">Sitemap</p>
                    <img src="https://bestbuyrdp.netlify.app/static/8703de2e3dc67648158abc9f629af356/630fb/payment.png" alt = "payment methods" />
                </div>
                <div className="footer-right">
                    <div className="footer-headings">
                        <h3 className="footer-heading">Dedicated Servers</h3>
                        <ul className="footer-links">
                            <li className="footer-link">Europe Servers</li>
                            <li className="footer-link">USA Servers</li>
                            <li className="footer-link">APAC Servers</li>
                        </ul>
                    </div>
                    <div className="footer-headings">
                        <h3 className="footer-heading">About Us</h3>
                        <ul className="footer-links">
                            <li className="footer-link">Europe Servers</li>
                            <li className="footer-link">USA Servers</li>
                            <li className="footer-link">APAC Servers</li>
                        </ul>
                    </div>
                    <div className="footer-headings">
                        <h3 className="footer-heading">Legal</h3>
                        <ul className="footer-links">
                            <li className="footer-link">Europe Servers</li>
                            <li className="footer-link">USA Servers</li>
                            <li className="footer-link">APAC Servers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
