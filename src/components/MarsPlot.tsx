import React, { CSSProperties, useState } from "react";
import CardContainer from "./Cards/CardContainer";
import Modal from "./Cards/Modal";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";

function MarsPlot() {
  const text = "Tomter";

  return (
    <>
      <Header text={text}></Header>

      <div style={cardsContainer}>
        <CardContainer />
      </div>
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
  height: "auto",
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default MarsPlot;
