import React, { CSSProperties } from "react";
import Button from "./Button";
import {
  //    BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import TravelToMars from "./TravelToMars";

function LandingPage() {
  return (
    <div style={landingPageStyling}>
      <h1 style={landingH1eStyle}>Mars</h1>
      <div className="landingImage" style={landingImageContainer}>
        <img src="./assets/mars.png" style={landingImage} alt="mars" />
      </div>
      {/* <Router> */}
      <Switch>
        <Link to="/TravelToMars">
          <Button btnText="Res hit" />
        </Link>
        <Route path="/TravelToMars" component={TravelToMars} />
      </Switch>
      {/* </Router> */}
    </div>
  );
}

const landingPageStyling: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
  paddingTop: '1.5rem',
  boxSizing: 'border-box'
};

const landingH1eStyle: CSSProperties = {
  fontSize: "4rem",
  color: "white",
  margin: 0
};

const landingImageContainer: CSSProperties = {
  width: "100%",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '2rem'
};

const landingImage: CSSProperties = {
  maxWidth: "20%",
  minWidth: '16rem'
};

export default LandingPage;
