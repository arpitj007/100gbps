import React from 'react';
import './Switch.css'

const Switch = ({isOn, handleToggle}) => {
    return (
        <>
        <span className="toggle-side-text">Monthly</span>
            <input 
                checked = {isOn}
                onChange = {handleToggle}
                className = "react-switch-checkbox"
                id = {`react-switch-new`}
                type = "checkbox"
            />
            <label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        <span className="toggle-side-text">Annually</span>
        </>
    )
}

export default Switch;