import React, { useState } from 'react'
import './DedicatedHover.css'



export const DropdownItemsUSA = [
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    }
]

export const DropdownItemsEU = [
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    }
]

export const DropdownItemsAPAC = [
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    },
    {     
        title: 'Atlanta Dedicated Servers',
        path: '/atlanta-dedicated-servers',
        cName: 'dedicated-dropdown-child'
    }
]


export const DropdownItems = [
    {
        title: "USA Dedicated Servers",
        path: '/usa-dedicated-servers',
        cName: 'dedicated-dropdown',
        children: DropdownItemsUSA
    },
    {
        title: "Europe Dedicated Servers",
        path: '/eu-dedicated-servers',
        cName: 'dedicated-dropdown',
        children: DropdownItemsEU
    },
    {
        title: "APAC Dedicated Servers",
        path: '/apac-dedicated-servers',
        cName: 'dedicated-dropdown',
        children: DropdownItemsAPAC
    }
]

function DedicatedHover() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)

    return (
        <div className="dedicated-server-grid">
            {DropdownItems.map((item, index) => {
                return (
                    <div onClick={handleClick} className="dedicated-server-category">
                        <h2 key={index} className="dedicated-item-heading">{item.title}</h2>
                        {item.children.map((child, y) => {
                           return (
                               <ul className="dedicated-children">
                                    <li className="dedicated-child">{child.title}</li>
                               </ul>
                           )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default DedicatedHover