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
                    <div className="coverage-country">
                        <Flags.US title="United States" className="country-flag"/><span className="country-name">USA</span>
                    </div>
                    <div className="coverage-country">
                        <Flags.IN title="India" className="country-flag"/><span className="country-name">India</span>
                    </div>
                    <div className="coverage-country">
                        <Flags.CA title="Canada" className="country-flag"/><span className="country-name">Canada</span>
                    </div>
                </div>
                <div className="country-flags">
                    <div className="coverage-country">
                        <Flags.GB title="United Kingdom" className="country-flag"/><span className="country-name">UK</span>
                    </div>
                    <div className="coverage-country">
                        <Flags.RS title="Russia" className="country-flag"/><span className="country-name">Russia</span>
                    </div>
                    <div className="coverage-country">
                        <Flags.AU title="Australia" className="country-flag"/><span className="country-name">Australia</span>
                    </div>
                </div>
                <div className="country-flags">
                    <div className="coverage-country">
                        <Flags.CN title="China" className="country-flag"/><span className="country-name">China</span>
                    </div>
                    <div className="coverage-country">
                        <Flags.KR title="Korea" className="country-flag"/><span className="country-name">Korea</span>
                    </div>
                    <div className="coverage-country">
                        <Flags.FR title="France" className="country-flag"/><span className="country-name">France</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coverage
