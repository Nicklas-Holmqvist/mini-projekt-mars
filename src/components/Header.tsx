import React, { CSSProperties } from 'react';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HamburgerMenu from './Menu';

function Header() {

    return (
        <>
            <div style={header}>
                <HamburgerMenu />                
                <span></span>
                <FontAwesomeIcon style={iconStyle} icon={faMoon} />
            </div>
        </>
    );
}

const header: CSSProperties = {
    background: '#8A2424',
    height: '5rem',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1rem'
}

const iconStyle: CSSProperties = {
    fontSize: '1.7rem',
    position: 'fixed',
    top: '25px',
    right: '40px'
}

export default Header;