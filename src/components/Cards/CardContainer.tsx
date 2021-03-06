import React, { CSSProperties } from "react";
import { useState } from "react";
import ErrorBoundary from "../ErrorBoundary";
import CardComponent from "./CardComponent";
import Modal from "./Modal";
interface Props {}

const CardContainer = (props: Props) => {
  const [modalOpen, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);
  const openModal = () => setOpenModal(true);
  const imgCardContainer = [
    {
      img: "canyon",
      price: 120,
      location: "Canyon",
      moreInfo:
        "Ligger i närheten till Mars största ravin med ett härligt klimat och temperaturer kring 200 - 300 grader året om.",
    },
    {
      img: "crator",
      price: 340,
      location: "Cratern",
      moreInfo: "Härligt område precis intill Mars största krater. ",
    },
    {
      img: "frosenLake",
      price: 790,
      location: "Sjönära ",
      moreInfo:
        "Sjönära tomt med härlig utsikt och temperaturer runt minus 100 - 200 grader året om. ",
    },
    {
      img: "canyon",
      price: 790,
      location: "Sneby ",
      moreInfo:
        "Ligger i närheten till Mars största ravin med ett härligt klimat och temperaturer kring 200 - 300 grader året om.",
    },
  ];

  return (
    <div style={containerStyle}>
      {modalOpen && (
        <Modal closeModal={closeModal}>
          <div
            style={{
              height: "200px",
              width: "200px",
              backgroundColor: "#8A2424",
              color: "white",
              padding: "1rem",
              borderRadius: "5px",
            }}
          >
            <h2>OBS!</h2>
            <p>Tyvärr ligger vårat betalningssystem nere för tilfället! </p>
            <button style={buttonStyle} onClick={closeModal}>
              Stäng
            </button>
          </div>
        </Modal>
      )}
      {imgCardContainer.map((card) => (
        <CardComponent
          image={card.img}
          price={card.price}
          location={card.location}
          moreInfo={card.moreInfo}
          modalOpen={openModal}
        />
      ))}
    </div>
  );
};
const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap",
  width: "100%",
  marginTop: "5rem",
  height: "auto",
  minHeight: "700px",
  alignItems: "center",
  backgroundColor: "#8A2424",
  marginBottom: "40px",
};
const buttonStyle: CSSProperties = {
  borderRadius: "3px",
  color: "black",
  padding: "10px",
  border: "none",
  width: "80px",
  outline: "none",
};
export default CardContainer;
