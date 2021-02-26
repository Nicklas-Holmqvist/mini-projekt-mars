import React, { CSSProperties } from 'react'
import LandingPage from "./LandingPage";
import Rover from './Rover';
import MarsPlot from './MarsPlot';
import Header from './Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';


function Layout() {

    const marsAppStyle:CSSProperties = {
        backgroundColor: '#8A2424',
        height: '100%',
        width: '100%'
    }

    return(
        <div className="marsApp" style={marsAppStyle}>
            <Header />
            <Route exact path="/">
            <LandingPage />

            </Route>
            {/* <Rover /> */}
    
            {/* <MarsPlot /> */}
        </div>
    )
}





export default Layout