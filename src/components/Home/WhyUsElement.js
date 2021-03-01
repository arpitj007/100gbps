import React from 'react'
import './WhyUsElement.css'
function WhyUsElement({logo, title, text}) {
    return (
        <div className="why-us-elem">
            <div className="elem-left"><img src={logo} alt={title}/></div>
            <div className="elem-right">
                <h3 className="whyus-elem-heading">{title}</h3>
                <p className="whyus-elem-text">{text}</p>
            </div>
        </div>
    )
}

export default WhyUsElement
