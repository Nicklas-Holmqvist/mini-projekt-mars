import React, { CSSProperties } from "react";
import Layout from "./components/Layout";


function App() {
  return (
    <div className="App" style={Fullscreen}>
      <Layout />
    </div>
  );
}

const Fullscreen:CSSProperties = {
  height: '100%',
  width: '100%'
}


export default App;
