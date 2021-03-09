import React from 'react'
import Coverage from '../Home/Coverage'
import Filler1 from '../Home/fillers/Filler1'
import Filler2 from '../Home/fillers/Filler2'
import Vendors from '../Home/Vendors'
import './About.css'

function About() {
    return (
        <div className="about-page">
            <h1 className="about-heading">About 100GBPS</h1>
            <div className="about">
                <div className="about-details">
                    <img className="about-img" alt="about-100gbps" src="https://bestbuyrdp.netlify.app/static/features-0e3eb68544fcbe33d987ef7654f319c7.svg"/>
                    <div className="about-text">
                        <h2 className="about-details-heading">Not so Long ago..</h2>
                        <p className="about-details-text">100GBPS was founded in 2015. Back in 2015 we were in search of a reliable remote desktop provider with best in class support and affordable pricing, we tried searching several rdp shop but we couldn’t find auy reliable provider.</p>
                        <p className="about-details-text">Which is when we decided why not we provide a reliable service to customers who have been looking for instant delivery rdp just like us. We founded the company with one goal just like our name suggests ‘Best service’ ‘Best Support’ and ‘Best Pricing’. Customers love us because our customer support is really friendly.</p>
                    </div>
                </div>
                <div className="about-details">
                    <div className="about-text">
                        <h2 className="about-details-heading">Services we offer..</h2>
                        <p className="about-details-text">100GBPS was founded in 2015. Back in 2015 we were in search of a reliable remote desktop provider with best in class support and affordable pricing, we tried searching several rdp shop but we couldn’t find auy reliable provider.</p>
                        <p className="about-details-text">Which is when we decided why not we provide a reliable service to customers who have been looking for instant delivery rdp just like us. We founded the company with one goal just like our name suggests ‘Best service’ ‘Best Support’ and ‘Best Pricing’. Customers love us because our customer support is really friendly.</p>
                    </div>
                    <img className="about-img" alt="about-100gbps" src="https://bestbuyrdp.netlify.app/static/features-0e3eb68544fcbe33d987ef7654f319c7.svg"/>
                </div>
                <div className="about-details">
                    <img className="about-img" alt="about-100gbps" src="https://bestbuyrdp.netlify.app/static/features-0e3eb68544fcbe33d987ef7654f319c7.svg"/>
                    <div className="about-text">
                        <h2 className="about-details-heading">Customer Service and reliable support..</h2>
                        <p className="about-details-text">100GBPS was founded in 2015. Back in 2015 we were in search of a reliable remote desktop provider with best in class support and affordable pricing, we tried searching several rdp shop but we couldn’t find auy reliable provider.</p>
                        <p className="about-details-text">Which is when we decided why not we provide a reliable service to customers who have been looking for instant delivery rdp just like us. We founded the company with one goal just like our name suggests ‘Best service’ ‘Best Support’ and ‘Best Pricing’. Customers love us because our customer support is really friendly.</p>
                    </div>
                </div>
            </div>
            <Filler1 />
            <Coverage />
            <Filler2 />
            <Vendors />
        </div>
    )
}

export default About
