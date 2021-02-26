import React, { CSSProperties } from 'react'
import LandingPage from "./LandingPage";
import Rover from './Rover';
import MarsPlot from './MarsPlot';
import Header from './Header';
import MarsInformation from './MarsInformation';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
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
            <BrowserRouter>
            <Switch>

            <Route exact path="/" component={LandingPage} />            
            <Route path="/MarsInformation" component={MarsInformation} />
            
            </Switch>
            </BrowserRouter>
            {/* <Rover /> */}
    
            {/* <MarsPlot /> */}
        </div>
    )
}





export default Layout