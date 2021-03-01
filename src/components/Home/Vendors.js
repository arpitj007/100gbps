import React from 'react'
import cloudlinux from './vector-logo/cloudlinux.svg'
import litespeed from './vector-logo/litespeed.svg'
import letsencrypt from './vector-logo/lets-encrypt.svg'
import cloudflare from './vector-logo/cloudflare.svg'
import cpanel from './vector-logo/cpanel.svg'
import './Vendors.css'

function Vendors() {
    const vendorList = [
        {  
            id: 1,
            title: "Cloudflare",
            img: `${cloudflare}`
        },
        {
            id: 2,
            title: "LiteSpeed",
            img: `${litespeed}`
        },
        {
            id: 3,
            title: "Let's Encrypt",
            img: `${letsencrypt}`
        },
        {
            id: 4,
            title: "Cloud Linux",
            img: `${cloudlinux}`
        },
        {
            id: 5,
            title: "cPanel",
            img: `${cpanel}`
        }        
    ]
    return (
        <div className="vendor-div">
                <h2 className="vendor-text">Our Vendors</h2>
            <div key={vendorList.id} className="vendors">
                {vendorList.map((vendors, index) => (
                    <img key={index} className="vendor-image" alt={vendors.title} src={vendors.img}/>    
                ))}
            </div>
        </div>
    )
}

export default Vendors
