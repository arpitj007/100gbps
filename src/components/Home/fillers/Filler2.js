import React from 'react'
import more from './more.svg'
import './Filler2.css'

function Filler2() {
    return (
        <>
        <div className="filler2-top">
            <img className="filler-2" src={more}/>
            <img className="filler-2" src={more}/>
            <img className="filler-2" src={more}/>
            <img className="filler-2" src={more}/>
        </div>
        <div className="filler2-bottom">
            <img className="filler-2-bottom" src={more}/>
            <img className="filler-2-bottom" src={more}/>
            <img className="filler-2-bottom" src={more}/>
            <img className="filler-2-bottom" src={more}/>
        </div>
        </>
    )
}

export default Filler2
