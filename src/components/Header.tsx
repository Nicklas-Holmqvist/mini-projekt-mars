import React, { CSSProperties } from 'react';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HamburgerMenu from './Menu';
import ErrorBoundary from './ErrorBoundary';

function Header() {

    return (
        <>
            <div style={header}>
                <ErrorBoundary>
                    <HamburgerMenu />                
                    <FontAwesomeIcon style={iconStyle} icon={faMoon} />
                </ErrorBoundary>
            </div>
        </>
    );
}

const header: CSSProperties = {
  background: "#621919",
  height: "5rem",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 1rem",
  position: "fixed",
  top: "0",
  width: "100%",
};

const iconStyle: CSSProperties = {
  fontSize: "1.7rem",
  position: "fixed",
  top: "25px",
  right: "40px",
};

export default Header;
