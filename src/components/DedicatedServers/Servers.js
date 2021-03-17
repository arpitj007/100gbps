import React from 'react'
import Button from '../Home/Button'
import DedicatedBundle from './DedicatedBundle'
import Feature from './Feature'
import './Servers.css'

function Servers(props) {
    return (
        <div className="dedicated-page">
            <div className="dedicated-head">
                <div className="dedicated-left">
                    <h2 className="dedicated-head-heading">Dedicated Server USA</h2>
                    <p className="dedicated-head-text">100GBPS provides the most reliable and cheap USA based RDP with full admin access, 100% clean dedicated IP, Pure SSD.</p>
                    <div className="dedicated-head-button">
                        <Button
                            src="https://bestbuyrdp.netlify.app/static/availability-86ce7c0bac3b96d6b55283f011cf99ff.svg"
                            name="Buy Now"
                        />
                    </div>
                </div>
                <div className="dedicated-right">
                    <img className="dedicated-head-image" src="https://bestbuyrdp.netlify.app/static/availability-86ce7c0bac3b96d6b55283f011cf99ff.svg" />
                </div>
            </div>
            <div className="dedicated-features">
                <Feature />
            </div>
            <DedicatedBundle 
                heading = "Cheap pricing for your needs"
            />
            
        </div>
    )
}

export default Servers
