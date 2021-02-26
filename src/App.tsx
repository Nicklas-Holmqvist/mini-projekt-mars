import React from "react";
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
