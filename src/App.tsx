import React from "react";
import Rover from "./components/Rover";
import MarsPlot from "./components/MarsPlot";
import LandingPage from "./components/LandingPage";
import ErrorBoundary from "./components/ErrorBoundary";

import { BrowserRouter } from "react-router-dom";
// import Rover from "./components/Rover";
// import MarsPlot from "./components/MarsPlot"
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
