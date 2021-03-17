import React from 'react'
import Button from './Button'
import './TryUs.css'

function TryUs() {
    return (
        <div className="try-us">
            <div className="try-us-left">
                <h2 className="try-us-heading">Try Why 100GBPS today!</h2>
                <p className="try-us-text">Know why 100GBPS is better than all other dedicated server providers out there</p>
            </div>
            <div className="try-us-right">
                <Button
                    className="try-us-button"
                    name="Try Now"
                />
            </div>
        </div>
    )
}

export default TryUs
