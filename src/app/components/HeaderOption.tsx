import React, { FC } from 'react'
import "./header-options.css"
import "../globals.css"

interface HeaderOptionProps {
    text: string,
    fontSize: string,
    width: string,
    height: string,
}

const HeaderOption: FC<HeaderOptionProps> = ({text, fontSize, width, height}) => {
    return (
        <div>
            <button className='header-option' style={{fontSize: fontSize, width: width, height: height}} >
                {text}
            </button>
        </div>
    )
}

export default HeaderOption