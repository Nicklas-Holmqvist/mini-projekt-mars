import React, { CSSProperties } from "react";
interface Props {
  image: string;
  price: number;
  location: string;
}
const CardComponent = (props: Props) => {
  const images = props.image;
  const imageSrc = `./assets/${images}.jpg`;
  return (
    <div style={cardContainerStyle}>
      <div style={imgContainer}>
        <img style={imgStyle} src={imageSrc} alt={"props.alt"} />
      </div>
      <div>
        <p style={{ paddingLeft: "10px" }}>
          <strong>Price:</strong> {props.price}
          <strong> $</strong>
        </p>
        <p style={{ paddingLeft: "10px" }}>
          <strong> Location:</strong> {props.location}
        </p>
      </div>
    </div>
  );
};
const cardContainerStyle: CSSProperties = {
  backgroundColor: "white",
  borderRadius: "10px",
  width: "400px",
  height: "400px",
  marginTop: "20px",
  marginBottom: "20px",
  boxShadow: "5px 10px 10px #eeee",
};
const imgStyle: CSSProperties = {
  objectFit: "fill",
  width: "100%",
  height: "100%",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
};
const imgContainer: CSSProperties = {
  backgroundColor: "#eeee",
  borderTopRightRadius: "10px",
  borderTopLeftRadius: "10px",

  height: "70%",
};

export default CardComponent;
