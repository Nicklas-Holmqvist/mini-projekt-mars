import React, { CSSProperties } from "react";
import CardContainer from "./Cards/CardContainer";
import Header from "./Header";

function MarsPlot() {
  return (
    <>
      <Header></Header>

      <div style={cardsContainer}>
        <CardContainer />
      </div>
      {/* <div style={mainContainer}> */}
      {/* <div className="cardContainer" style={cardContainerStyle}> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

const mainContainer: CSSProperties = {
  background: "#8A2424",
  display: "flex",
  // marginTop: '4rem',

  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};

const cardContainerStyle: CSSProperties = {
  padding: "1rem",
  width: "100%",
  marginTop: "20rem",
};
const cardsContainer: CSSProperties = {
  height: "100%",
  display: "flex",
};

export default MarsPlot;
