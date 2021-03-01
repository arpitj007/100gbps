import React from 'react'
import more from './more.svg'
import './Filler1.css'

function Filler1() {
    return (
        <>
        <div>
            <img className="filler-1" src={more}/>
            <img className="filler-1" src={more}/>
            <img className="filler-1" src={more}/>
            <img className="filler-1" src={more}/>
        </div>
        <div>
            <img className="filler-1-bottom" src={more}/>
            <img className="filler-1-bottom" src={more}/>
            <img className="filler-1-bottom" src={more}/>
            <img className="filler-1-bottom" src={more}/>
        </div>
        </>
    )
}

export default Filler1
