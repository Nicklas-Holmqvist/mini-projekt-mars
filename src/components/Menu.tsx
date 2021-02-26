import React, { CSSProperties } from 'react';

function HamburgerMenu() {
  return (
    <nav style={rootStyle}>
      <div className="icon">
        <div className="line line-1" style={lineStyle}></div>
        <div className="line line-2" style={lineStyle}></div>
        <div className="line line-3" style={lineStyle}></div>
      </div>
    </nav>
  )
}

const rootStyle: CSSProperties = {
  position: 'fixed',
  top: '30px',
  left: '40px'
}

const lineStyle: CSSProperties = {
  height: '2px',
  width: '28px',
  marginBottom: '7px',
  background: 'white'
}

export default HamburgerMenu;