import React, { useState } from 'react'
import './DedicatedHover.css'
import { Link } from 'react-router-dom'



export const DropdownItemsUSA = [
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Chicago',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    }
]

export const DropdownItemsEU = [
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    }
]

export const DropdownItemsAPAC = [
    {     
        title: 'APAC',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    }
]


export const DropdownItems = [
    {
        title: "USA",
        path: '/usa-dedicated-servers',
        cName: 'dedicated-dropdown',
        children: DropdownItemsUSA,
        id: 'dp-usa'
    },
    {
        title: "Europe",
        path: '/eu-dedicated-servers',
        cName: 'dedicated-dropdown',
        children: DropdownItemsEU,
        id: 'dp-eu'
    },
    {
        title: "APAC",
        path: '/apac-dedicated-servers',
        cName: 'dedicated-dropdown',
        children: DropdownItemsAPAC,
        id: 'dp-apac'
    }
]


function DedicatedHover() {

    const checkHover = (props) => {
        if(props === 'dp-usa') {
            return returnUSA;
        } else if(props === 'dp-eu') {
            console.log('eu')
        } else {
            console.log('apac')
        }
    }

    const returnUSA = () => {
        <div className="dropdown-right" >
                <ul className="dedicated-right-locations active">
                {DropdownItemsUSA.map((val, key) => {
                    return (
                        <li key={key} className="dedicated-right-location">
                            {val.title}
                        </li>
                    )
                })}
                </ul>
                </div>
    }
    
    return (
        <div className="dropdown">
            <div className="dropdown-left">
                {DropdownItems.map((val, key) => {
                    return (
                        <Link to={val.path} key={key} id={val.id}  onMouseEnter={() => checkHover(val.id)} className="dropdown-country">{val.title}</Link>

                    )
                })}
            </div>  
            {returnUSA}
            <div className="dropdown-right">
                <ul className="dedicated-right-locations">
                {DropdownItemsEU.map((val, key) => {
                    return (
                        <li key={key} className="dedicated-right-location">
                            {val.title}
                        </li>
                    )
                })}
                </ul>
            </div>
            <div className="dropdown-right">
                <ul className="dedicated-right-locations">
                {DropdownItemsAPAC.map((val, key) => {
                    return (
                        <li key={key} className="dedicated-right-location">
                            {val.title}
                        </li>
                    )
                })}
                </ul>
            </div>     
        </div>
    )
}

export default DedicatedHover
