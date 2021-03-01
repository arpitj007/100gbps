import React from 'react'
import './Coverage.css'
import Flags from 'country-flag-icons/react/3x2'

function Coverage() {
    return (
        <div className="coverage">
            <div className="coverage-left">
                <h2 className="coverage-heading">Worldwide Coverage</h2>
                <p className="coverage-text">Whether you’re a website beginner or an expert, our web hosting plans offer the flexibility to choose what works best for you.</p>
            </div>
            <div className="coverage-right">
                <div className="country-flags">
                    <Flags.US title="United States" className="country-flag"/>
                    <Flags.US title="United States" className="country-flag"/>
                    <Flags.US title="United States" className="country-flag"/>
                </div>
                <div className="country-flags">
                    <Flags.US title="United States" className="country-flag"/>
                    <Flags.US title="United States" className="country-flag"/>
                    <Flags.US title="United States" className="country-flag"/>
                </div>
            </div>
        </div>
    )
}

export default Coverage
