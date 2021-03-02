import React, { Component, CSSProperties } from "react";
import LandingPage from "./LandingPage";

import Rover from "./Rover";
import Header from "./Header";
import MarsPlot from "./MarsPlot";
import TravelToMars from "./TravelToMars";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import MarsInformation from "./MarsInformation";

class Layout extends Component {
  marsAppStyle: CSSProperties = {
    backgroundColor: "#8A2424",
    height: "auto",
    minHeight: "100%",
    width: "100%",
  };

  render() {
    return (
      <BrowserRouter>
        <div className="marsApp" style={this.marsAppStyle}>
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/LandingPage" component={LandingPage} />
            <Route path="/MarsInformation" component={MarsInformation} />
            <Route path="/Rover" component={Rover} />
            <Route path="/MarsPlot" component={MarsPlot} />
            <Route path="/TravelToMars" component={TravelToMars} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Layout;
