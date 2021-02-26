import React from "react";
import Rover from "./components/Rover";
import MarsPlot from "./components/MarsPlot"
import LandingPage from "./components/LandingPage";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from './components/Layout';

function App() {
  return (
    <ErrorBoundary>
      <Layout/> 
    </ErrorBoundary>
  )
    
}


export default App;
