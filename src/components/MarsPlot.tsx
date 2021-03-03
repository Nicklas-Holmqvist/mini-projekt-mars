import React, { CSSProperties, useState } from "react";
import CardContainer from "./Cards/CardContainer";
import Modal from "./Cards/Modal";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";

function MarsPlot() {
  const text = "Tomter";
  const [modalOpen, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);
  const openModal = () => setOpenModal(true);
  return (
    <>
      <Header text={text}></Header>

      <div style={cardsContainer}>
        {modalOpen && (
          <Modal closeModal={closeModal}>
            <p>HEj på dig MOdal</p>
            <button onClick={closeModal}>close Modal</button>
          </Modal>
        )}
        <CardContainer modalOpen={openModal} />
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
  height: "auto",
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default MarsPlot;
