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
  height: "calc(100vh - 5rem)",
  width: "100%",
  paddingTop: "5rem",
};

const landingH1eStyle: CSSProperties = {
  fontSize: "4rem",
  color: "white",
};

const landingImageContainer: CSSProperties = {
  width: "20rem",
  padding: "3rem 0 4rem 0",
};

const landingImage: CSSProperties = {
  width: "100%",
};

export default LandingPage;
