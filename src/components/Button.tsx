import React, { CSSProperties } from 'react'
// import { Link } from 'react-router-dom'

interface Props {
    btnText: string
    onClick?: () => void;
}

function Button(props: Props) {

    const btnText = props.btnText;

    return (
        <button onClick={props.onClick} style={buttonStyle}>
            {btnText}
        </button>
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