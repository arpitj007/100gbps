import React, { useState, setState } from 'react'
import PriceBundles from './PriceBundles';
import './Pricing.css'
import Switch from './Switch'

function Pricing() {
    const [value, setValue] = useState(false);
    const toggle = () => setValue(!value)
    return (
        <div className="pricing">
            <div className="pricing-head">
                <h2 className="pricing-heading">Powerful dedicated servers</h2>
                <div className="pricing-text">100GBPS offers cheap Dedicated server pricing options across entire configuration.</div>
                <div className="pricing-text">Choose what's best suited for your workload.</div>
                <div className="pricing-boxes">
                    <div className="toggle-switch">
                        <Switch
                        isOn = {value}
                        handleToggle = {toggle}
                        />
                    </div>
                    <div className="price-bundles">
                        <PriceBundles />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
