import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'
function Button({src, name}) {
    return (
        <div className="pack-button-out">
            <Link className="pack-button-link" to ={src}>
                <button  className="pack-button">{name}</button>
            </Link>
        </div>
    )
}

export default Button
