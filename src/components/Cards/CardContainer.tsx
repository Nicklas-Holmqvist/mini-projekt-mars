import React, { CSSProperties } from "react";
import CardComponent from "./CardComponent";
const CardContainer = () => {
  const imgCardContainer = [
    {
      img: "canyon",
      price: 120,
      location: "sneby ",
    },
    {
      img: "crator",
      price: 340,
      location: "sneby ",
    },
    {
      img: "frosenLake",
      price: 790,
      location: "sneby ",
    },
    {
      img: "canyon",
      price: 790,
      location: "sneby ",
    },
  ];

  return (
    <div style={containerStyle}>
      {imgCardContainer.map((card) => (
        <CardComponent
          image={card.img}
          price={card.price}
          location={card.location}
        />
      ))}
    </div>
  );
};
const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#414141",
  justifyContent: "space-around",
  flexWrap: "wrap",
};
export default CardContainer;
