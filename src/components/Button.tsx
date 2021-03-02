import React, { CSSProperties } from 'react'
// import { Link } from 'react-router-dom'

interface Props {
    btnText: string
}

function Button(props: Props) {

    const btnText = props.btnText;

    return (
        <button style={buttonStyle}>
            {btnText}
        </button>
    )
}

const buttonStyle: CSSProperties = {
    background: 'white',
    border: '1px black solid',
    borderRadius: '.2rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    outline: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
    fontFamily: 'Helvetica'
}



export default Button