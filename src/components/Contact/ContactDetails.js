import React from 'react'
import FAQ from '../FAQ'
import ContactCard from './ContactCard'
import './ContactDetails.css'
import ticketVector from './Vector/liveChat.svg'

function ContactDetails() {
    return (
        <>
            <div className="contact-details">
                <ContactCard 
                    img = {ticketVector}
                    heading = "Raise a Ticket"
                    text = "Whether you’re a website beginner or an expert, our web hosting plans offer the flexibility"
                />
                <ContactCard 
                    img = {ticketVector}
                    heading = "Email Support"
                    text = "Whether you’re a website beginner or an expert, our web hosting plans offer the flexibility"
                />
                <ContactCard 
                    img = {ticketVector}
                    heading = "Live Chat"
                    text = "Whether you’re a website beginner or an expert, our web hosting plans offer the flexibility"
                />     
            </div>
            <FAQ 
                heading1 = "Flexible pricing packages?"
                heading2 = "What are the modes of Payment methods available?"
                text1 = "We put zero restrictions on the number of proxies you can use. Choose the best plan for your needs. We put zero restrictions on the number of proxies you can use. Choose the best plan for your needs."
                text2 = "We accept Paypal, Perfect Money, Bitcoins, Altcoins, Credit / Debit cards, Net Banking, Ethereum, Litecoin, PayTM, UPI. *Paypal email address must match the registered email address."
            />
            

        </>

    )
}

export default ContactDetails
