import React from 'react'
import './Testimonial.css'
function Testimonial({text, name,img, client}) {
    return (
        <div class="testimonial">
            <p className="testimonial-text">{text}</p>
            <div className="testimonial-client">
                <img className="testimonial-img" alt = {name} src = {img}/>
                <div className="testimonial-right">
                    <h3 className="testimonial-name">{name}</h3>
                    <p className="testimonial-country">{client}</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
