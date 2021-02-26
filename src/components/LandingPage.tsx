import React, { CSSProperties } from 'react';
import Button from './Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import MarsInformation from './MarsInformation';


function LandingPage() {

    return(
        <div style={landingPageStyling}>
            <h1 style={landingH1eStyle}>Mars</h1>
            <div className="landingImage" style={landingImageContainer}>
                <img src="./assets/mars.png" style={landingImage} alt="mars"/>
            </div>
            <Router>
                        <Link to="/MarsInformation">
                        <Button />
                        </Link>
                <Switch>
                    <Route path="/MarsInformation">
                        <MarsInformation />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

const landingPageStyling: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
}

const landingH1eStyle: CSSProperties = {
    fontSize: '4rem'
}

const landingImageContainer: CSSProperties = {
    width: '20rem',
    padding: '3rem 0 4rem 0'
}

const landingImage: CSSProperties = {
    width: '100%'
}

export default LandingPage