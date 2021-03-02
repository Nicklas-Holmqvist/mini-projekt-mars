import React, { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

function Button() {

    return (
        <Link to="/TravelToMars">
            <button style={buttonStyle}>RES HIT</button>
        </Link>
    )
}

const buttonStyle: CSSProperties = {
    background: 'white',
    border: '1px solid black',
    borderRadius: '6px',
    padding: '.75rem 1.5rem',
    fontFamily: 'inherit',
    cursor: 'pointer',
    outline: 'none',
    fontSize: '1.2rem'
}



export default Button