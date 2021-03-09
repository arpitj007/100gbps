import React from 'react'
import './FAQ.css'

function FAQ(props) {
    return (
        <div className="faq-content">
            <h2 className="faq-content-heading">Frequently Asked Questions</h2>
            <p className="faq-content-text">Whether you’re a website beginner or an expert, our web hosting plans offer the flexibility to choose what works best for you.</p>     
            <div className="faqs">
                <div className="faq">
                    <h3 className="faq-heading">{props.heading1}</h3>
                    <p className="faq-text">{props.text1}</p>
                </div>
                <div className="faq">
                    <h3 className="faq-heading">{props.heading2}</h3>
                    <p className="faq-text">{props.text2}</p>
                </div>
            </div>
            <div className="faqs">
                <div className="faq">
                    <h3 className="faq-heading">{props.heading1}</h3>
                    <p className="faq-text">{props.text1}</p>
                </div>
                <div className="faq">
                    <h3 className="faq-heading">{props.heading2}</h3>
                    <p className="faq-text">{props.text2}</p>
                </div>
            </div>
            <div className="faqs">
                <div className="faq">
                    <h3 className="faq-heading">{props.heading1}</h3>
                    <p className="faq-text">{props.text1}</p>
                </div>
                <div className="faq">
                    <h3 className="faq-heading">{props.heading2}</h3>
                    <p className="faq-text">{props.text2}</p>
                </div>
            </div>
        </div>
    )
}

export default FAQ
