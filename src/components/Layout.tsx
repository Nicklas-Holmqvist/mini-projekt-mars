import React, { CSSProperties } from 'react'
import LandingPage from "./LandingPage";
import HamburgerMenu from './Menu';
import Rover from './Rover';

function Layout() {

    const marsAppStyle:CSSProperties = {
        backgroundColor: '#8A2424',
        height: '100%',
        width: '100%'
    }

    const handleIconClick = () => {
        console.log('open')
    }

    return(
        <div className="marsApp" style={marsAppStyle}>
            <HamburgerMenu onIconClick={handleIconClick}/>
            <LandingPage />
            <Rover />
        </div>
    )
}





export default Layout