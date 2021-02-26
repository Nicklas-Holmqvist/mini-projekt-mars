import React, { CSSProperties } from 'react'
import LandingPage from "./LandingPage";
import Rover from './Rover';

function Layout() {

    const marsAppStyle:CSSProperties = {
        backgroundColor: '#8A2424',
        height: '100%',
        width: '100%'
    }

    return(
        <div className="marsApp" style={marsAppStyle}>
            <LandingPage />
            <Rover />
        </div>
    )
}





export default Layout