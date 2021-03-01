import React, { Component, CSSProperties } from 'react'
import LandingPage from "./LandingPage";
import HamburgerMenu from './Menu';
import Rover from './Rover';
import Header from './Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from 'react-router-dom';

import MarsInformation from './MarsInformation';

class Layout extends Component {
    
    marsAppStyle: CSSProperties = {
        backgroundColor: '#8A2424',
        height: '100%',
        width: '100%'
    }
    
    render () {
        return (
            <BrowserRouter>
                <div className="marsApp" style={this.marsAppStyle}>                  
                    {/* <LandingPage /> */}
                    {/* <Rover /> */}     

                    <Header />           
                    <Route exact path="/" component={LandingPage} />  

                    <Switch>
                        <Route path="/MarsInformation" component={MarsInformation} />
                    </Switch>

                    {/* <Rover /> */}
                    {/* <MarsPlot /> */}
                </div>
            </BrowserRouter>
        )
    }    
}

export default Layout;