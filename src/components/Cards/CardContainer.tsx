import React, { CSSProperties } from "react";
import CardComponent from "./CardComponent";
const CardContainer = () => {
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
      location: "sneby ",
      moreInfo: "",
    },
  ];

  return (
    <div style={containerStyle}>
      {imgCardContainer.map((card) => (
        <CardComponent
          image={card.img}
          price={card.price}
          location={card.location}
          moreInfo={card.moreInfo}
        />
      ))}
    </div>
  );
};
const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "white",
  justifyContent: "space-around",
  flexWrap: "wrap",
  width: "100%",
  marginTop: "5rem",
};
export default CardContainer;
