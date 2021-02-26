import React, { CSSProperties } from 'react'

function Button() {

    return (
        <button style={buttonStyle}>
            Klicka
        </button>
    )
}

const buttonStyle: CSSProperties = {
    width: '8rem',
    height: '2.5rem',
    background: 'white',
    border: '1px black solid',
    borderRadius: '.2rem',
    fontSize: '1.2rem',
    outline: 'none',
    cursor: 'pointer',
}



export default Button