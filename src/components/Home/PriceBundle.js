import React from 'react'
import Button from './Button'
import './PriceBundle.css'
function PriceBundle() {
    const packDetails = [
        {
            processor: "Intel Xeon E5-2650 v3",
            cores: "20 Core/40 Threads",
            ram: "Upto 64 GB RAM",
            port: "10 GBPS Port Speed",
            storage: "50GB Minimum Storage",
            uptime: "99.99% Service Uptime",
            admin: "No Admin Access",
            os: "Windows Server 2016 x64",
            link: "/dedicated-server"
        },
        {
            processor: "Intel Xeon E5-2650 v3",
            cores: "Intel Xeon E5-2650 v3",
            ram: "Intel Xeon E5-2650 v3",
            port: "Intel Xeon E5-2650 v3",
            storage: "Intel Xeon E5-2650 v3",
            uptime: "Intel Xeon E5-2650 v3",
            admin: "Intel Xeon E5-2650 v3",
            os: "Intel Xeon E5-2650 v3",
            link: "/reseller"
        },
        {
            processor: "Intel Xeon E5-2650 v3",
            cores: "Intel Xeon E5-2650 v3",
            ram: "Intel Xeon E5-2650 v3",
            port: "Intel Xeon E5-2650 v3",
            storage: "Intel Xeon E5-2650 v3",
            uptime: "Intel Xeon E5-2650 v3",
            admin: "Intel Xeon E5-2650 v3",
            os: "Intel Xeon E5-2650 v3",
            link: "/about"
        }, 
    ]
    return (
        <>
            {packDetails.map((packDetail, index) => (
                <div key={index} className="price-bundle">
                    <p className="featured">Featured Deal</p>
                    <p className="price-per-month">$23.99<span className="pack-valadity">/mo</span></p>
                    <p className="price-pack">Starter Basic</p>
                    <p className="price-pack-description">Some description and yeah whatever i dont know what to write okay reached the suitable length now </p>
                    <div className="pack-details">
                        <p className="pack-detail"><i className="fa fa-check"></i>{packDetail.processor}</p>
                        <p className="pack-detail"><i className="fa fa-check"></i>{packDetail.cores}</p>
                        <p className="pack-detail"><i className="fa fa-check"></i>{packDetail.ram}</p>
                        <p className="pack-detail"><i className="fa fa-check"></i>{packDetail.port}</p>
                        <p className="pack-detail"><i className="fa fa-times"></i>{packDetail.storage}</p>
                        <p className="pack-detail"><i className="fa fa-times"></i>{packDetail.uptime}</p>
                        <p className="pack-detail"><i className="fa fa-times"></i>{packDetail.admin}</p>
                        <p className="pack-detail"><i className="fa fa-times"></i>{packDetail.os}</p>
                        <Button
                            src= {packDetail.link}
                            name="Learn more"
                        />
                    </div>
                </div>
            ))}
        </>    
    )
}

export default PriceBundle
