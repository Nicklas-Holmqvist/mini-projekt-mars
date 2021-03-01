import React, { Component, CSSProperties } from 'react'
import LandingPage from "./LandingPage";
import HamburgerMenu from './Menu';
import Rover from './Rover';
import Header from './Header';
import MarsPlot from './MarsPlot';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from 'react-router-dom';

import MarsInformation from './MarsInformation';

interface Props {}
interface State {
    isMenuOpen: boolean;
}

class Layout extends Component<Props, State> {
    state: State = {
        isMenuOpen: false
    }
    
    marsAppStyle: CSSProperties = {
        backgroundColor: '#8A2424',
        height: '100%',
        width: '100%'
    }

    toggleSidebar = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen })
    }
    
    render () {
        return (
            <BrowserRouter>
            <div className="marsApp" style={this.marsAppStyle}>
                <HamburgerMenu 
                    onIconClick={this.toggleSidebar} 
                    isOpen={this.state.isMenuOpen}
                    />
                {/* <LandingPage /> */}
                {/* <Rover /> */}

            
            {/* <Header /> */}
            
            <Route exact path="/LandingPage" component={LandingPage} />            
            <Switch>

            <Route path="/MarsInformation" component={MarsInformation} />
            <Route path="/Rover" component={Rover} />
            <Route path="/MarsPlot" component={MarsPlot} />
            
            </Switch>
        
            {/* <Rover /> */}
    
            {/* <MarsPlot /> */}
     
            </div>
                    </BrowserRouter>
        )
    }    
}

export default Layout;