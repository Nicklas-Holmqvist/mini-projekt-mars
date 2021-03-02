import React, { Component, CSSProperties } from 'react'
import LandingPage from "./LandingPage";

import Rover from './Rover';
import Header from './Header';
import MarsPlot from './MarsPlot';
import {
    Switch,
    Route,
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
                    <Switch>
                        <Route exact path="/LandingPage" component={LandingPage} />               
                        <Route path="/MarsInformation" component={MarsInformation} />
                        <Route path="/Rover" component={Rover} />
                        <Route path="/MarsPlot" component={MarsPlot} />                        
                    </Switch>

                </div>
            </BrowserRouter>
        )
    }    
}

export default Layout;