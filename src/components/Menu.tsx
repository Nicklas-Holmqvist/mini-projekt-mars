import React, { CSSProperties } from 'react';

interface Props {
  onIconClick: () => void; 
  isOpen: boolean;
}

function HamburgerMenu(props: Props) {

  if (!props.isOpen) 
    return (
      <nav style={rootStyle}>
        <div style={iconStyle} className="icon" onClick={props.onIconClick}>
          <div className="line line-1" style={lineStyle}></div>
          <div className="line line-2" style={lineStyle}></div>
          <div className="line line-3" style={lineStyle}></div>
        </div>
      </nav>
    )
 
    return (
      <nav style={rootStyle}>
        <div style={iconStyle} className="icon" onClick={props.onIconClick}>
          <div className="line line-1" style={lineStyle}></div>
          <div className="line line-2" style={lineStyle}></div>
          <div className="line line-3" style={lineStyle}></div>
        </div>
        <ul 
          style={{
            ...ulStyle,
            left: props.isOpen ? 0 : '-100%'
          }} 
        >
          <li style={liStyle}>Hem</li>
          <li style={liStyle}>Rover</li>
          <li style={liStyle}>Tomter</li>
        </ul>
      </nav>
    )
  
}

const lineStyle: CSSProperties = {
  height: '2px',
  width: '28px',
  marginBottom: '7px',
  background: 'white',
  zIndex: 10
}

const ulStyle: CSSProperties = {
  position: 'fixed',
  background: '#461515',
  left: 0,
  bottom: 0,
  top: 0,
  width: '16rem',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  listStyle: 'none',
  textAlign: 'center',
  zIndex: 5,
  transition: 'left 1000ms'
}

const liStyle: CSSProperties = {
  padding: '1.5rem',
  margin: '2rem 0',
  fontSize: '1.75rem',
  color: 'white',
}

const iconStyle: CSSProperties = {
  cursor: 'pointer',
  position: 'fixed',
  zIndex: 11
}

const rootStyle: CSSProperties = {
  position: 'fixed',
  top: '30px',
  left: '40px',
}

export default HamburgerMenu;