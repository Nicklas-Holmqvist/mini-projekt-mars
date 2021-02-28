import React, { CSSProperties, useState } from "react";
interface Props {
  image: string;
  price: number;
  location: string;
}

const CardComponent = (props: Props) => {
  const images = props.image;

  const imageSrc = `./assets/${images}.jpg`;
  const [isZoomed, setZoom] = useState(false);
  return (
    <div
      style={{ ...cardContainerStyle, height: !isZoomed ? "500px" : "auto" }}
    >
      <div style={imgContainer}>
        <img style={imgStyle} src={imageSrc} alt={"props.alt"} />
      </div>
      <div style={flexContainer}>
        <div>
          <p style={leftPadding}>
            <strong>Price:</strong> {props.price}
            <strong> $</strong>
          </p>
          <p style={leftPadding}>
            <strong> Location:</strong> {props.location}
          </p>
        </div>
        <div style={{ paddingLeft: "10px" }}>
          <button
            style={{
              ...buttonhiddenStyle,
              display: !isZoomed ? "block" : "none",
            }}
            onClick={() => setZoom(true)}
          >
            More info
          </button>
        </div>

        <div
          style={{ ...isVisible, visibility: !isZoomed ? "hidden" : "visible" }}
        >
          <p>adfjvknsdkfnvksnjnfvsklnfvsjknfkvns</p>
          <p>adfjvknsdkfnvksnjnfvsklnfvsjknfkvns</p>
          <p>adfjvknsdkfnvksnjnfvsklnfvsjknfkvns</p>

          <button onClick={() => setZoom(false)}>close</button>
        </div>
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
  transition: "height 800ms",
};
const imgStyle: CSSProperties = {
  objectFit: "fill",
  width: "100%",
  height: "100%",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  transition: "height 800ms",
};
const imgContainer: CSSProperties = {
  backgroundColor: "#eeee",
  borderTopRightRadius: "10px",
  borderTopLeftRadius: "10px",
  transition: "height 800ms",
  height: "20rem",
};
const leftPadding: CSSProperties = {
  paddingLeft: "10px",
};
const isVisible: CSSProperties = {
  height: "10rem",
  transition: "height 800ms",
};
const flexContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  transition: "height 800ms",
};
const buttonhiddenStyle: CSSProperties = {
  backgroundColor: "lightgreen",
  borderRadius: "3px",
  color: "white",
  padding: "10px",
  border: "none",
};

export default CardComponent;
