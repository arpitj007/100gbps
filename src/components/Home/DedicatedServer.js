import React from 'react'
import './DedicatedServer.css'

function DedicatedServer() {
    const features = [
        {
            id: 1,
            title: "Performance",
            text: "Random text long enough to take you anywhere. I am not sure what to write right now but it will come out to be good",
            icon: "fa fa-server",
            img: ""
        },
        {
            id: 2,
            title: "Secure",
            text: "Random text long enough to take you anywhere. I am not sure what to write right now but it will come out to be good",
            icon: "fa fa-shield",
            img: ""
        },
        {
            id: 3,
            title: "Speed",
            text: "Random text long enough to take you anywhere. I am not sure what to write right now but it will come out to be good",
            icon: "fa fa-fighter-jet",
            img: ""
        },
    ]
    const features2 = [
        {
            id: 4,
            title: "Price",
            text: "Random text long enough to take you anywhere. I am not sure what to write right now but it will come out to be good",
            icon: "fa fa-google-wallet",
            img: ""
        },
        {
            id: 5,
            title: "Uptime",
            text: "Random text long enough to take you anywhere. I am not sure what to write right now but it will come out to be good",
            icon: "fa fa-thumbs-up",
            img: ""
        },
        {
            id: 6,
            title: "Live Support",
            text: "Random text long enough to take you anywhere. I am not sure what to write right now but it will come out to be good",
            icon: "fa fa-life-ring",
            img: ""
        }
    ];
    return (
        <div className="dedicated-server-container">
            <div>
                <h2 className="dedicated-server-heading">100GBPS for your needs</h2>
                <p className="dedicated-server-text">100GBPS provides you with unrivalled performance, support, and reliability</p>
                <p className="dedicated-server-text">Everything you can think of when you want to buy a dedicated server</p>
                <div className="dedicated-features">
                    <div className="dedicated-body">
                        {features.map((feature, i) => (
                                <div key={i} className="dedicated-card">
                                    <div className="dedicated-img-avatar">
                                        <i className={feature.icon}></i>
                                    </div>
                                    <div className="dedicated-card-text">
                                        <div className="dedicated-portada">
                                            <img className="dedicated-img-portada" src="https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05" />
                                        </div>
                                        <div className="dedicated-title-total">   
                                            <div className="dedicated-title">{feature.title}</div>
                                        <div className="dedicated-desc">{feature.text}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
                <div className="dedicated-features">
                    <div className="dedicated-body">
                        {features2.map((feature, i) => (
                                <div key={i} className="dedicated-card">
                                    <div className="dedicated-img-avatar">
                                        <i className={feature.icon}></i>
                                    </div>
                                    <div className="dedicated-card-text">
                                        <div className="dedicated-portada">
                                            <img className="dedicated-img-portada" src="https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05" />
                                        </div>
                                        <div className="dedicated-title-total">   
                                            <div className="dedicated-title">{feature.title}</div>
                                        <div className="dedicated-desc">{feature.text}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default DedicatedServer