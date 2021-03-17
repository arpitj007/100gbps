import React from 'react'
import './Feature.css'
function Feature() {
    return (
        <div className="dedicated-feature-list">
            <div className="dedicated-feature-c"><i className="fas fa-check-double" /><span className="feature-c-text">100% uptime guarnteed</span></div>              
            <div className="dedicated-feature-c"><i className="fas fa-brain" /><span className="feature-c-text">Intelligent Datacenters</span></div>              
            <div className="dedicated-feature-c"><i className="fas fa-award" /><span className="feature-c-text">24/7 Availability</span></div>              
            <div className="dedicated-feature-c"><i className="fas fa-compass" /><span className="feature-c-text">Easy Scalability</span></div>              
        </div>
    )
}

export default Feature
