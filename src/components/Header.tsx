
import React, { CSSProperties } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {

    return(
        <>
        <div style={header}>
        <FontAwesomeIcon style={iconStyle} icon={faBars} />
            <h2>Path</h2>
        <FontAwesomeIcon style={iconStyle} icon={faMoon} />
            

        </div>
        </>
    );
}


const header: CSSProperties = {
    background: '#8A2424',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1rem'

}

const iconStyle: CSSProperties = {
    fontSize: '1.7rem'
}

export default Header;