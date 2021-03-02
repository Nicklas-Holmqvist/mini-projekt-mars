import React, { CSSProperties } from 'react'

interface Props {
    btnText: string
}

function Button(props:Props) {

    const btnText = props.btnText

    return (
        <button style={buttonStyle}>
            {btnText}
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