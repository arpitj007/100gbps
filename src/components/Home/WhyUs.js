import React from 'react'
import './WhyUs.css'
import WhyUsElement from './WhyUsElement'

function WhyUs() {
    return (
        <div className="why-us">
            <div className="why-us-top">
                <h2 className="why-us-heading">Why 100GBPS</h2>
                <p className="why-us-text">Whether you’re a website beginner or an expert, our web hosting plans offer the flexibility to choose what works best for you.</p>
            </div>
            <div className="why-us-bottom">
                <div className="why-us-elems">
                        <WhyUsElement 
                            logo="https://bestbuyrdp.netlify.app/static/server-780c91a84792459bad9c0bc0c7d0f721.svg"
                            title="Baremetal Servers"
                            text="Upgradeable hardware would be useful when you have a small business and need to add more resources step by step with growing"
                        />
                        <WhyUsElement 
                            logo="https://bestbuyrdp.netlify.app/static/server-780c91a84792459bad9c0bc0c7d0f721.svg"
                            title="Baremetal Servers"
                            text="Upgradeable hardware would be useful when you have a small business and need to add more resources step by step with growing"
                        />
                </div>
                <div className="why-us-elems">
                        <WhyUsElement 
                            logo="https://bestbuyrdp.netlify.app/static/server-780c91a84792459bad9c0bc0c7d0f721.svg"
                            title="Baremetal Servers"
                            text="Upgradeable hardware would be useful when you have a small business and need to add more resources step by step with growing"
                        />
                        <WhyUsElement 
                            logo="https://bestbuyrdp.netlify.app/static/server-780c91a84792459bad9c0bc0c7d0f721.svg"
                            title="Baremetal Servers"
                            text="Upgradeable hardware would be useful when you have a small business and need to add more resources step by step with growing"
                        />
                </div>
                 <div className="why-us-elems">
                </div>
            </div>
        </div>
    )
}

export default WhyUs
