import React, { CSSProperties } from 'react'
import LandingPage from "./LandingPage";

function Layout() {

    const marsAppStyle:CSSProperties = {
        backgroundColor: '#8A2424',
        height: '100%',
        width: '100%'
    }

    return(
        <div className="marsApp" style={marsAppStyle}>
            <LandingPage />
        </div>
    )
}





export default Layout