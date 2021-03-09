import React from 'react'
import './ContactCard.css'


function ContactCard(props) {
    return (
        <div className="contact-card">
            <img className="contact-card-img" src={props.img} alt={props.heading}/>
            <h2 className="contact-card-heading">{props.heading}</h2>
            <p className="contact-card-text">{props.text}</p>
        </div>
    )
}

export default ContactCard
