import React, { CSSProperties, useState } from "react";
interface Props {
  image: string;
  price: number;
  location: string;
  moreInfo: string;
}

const CardComponent = (props: Props) => {
  const images = props.image;
  const [moreInfo, setZoom] = useState(false);
  const imageSrc = `./assets/${images}.jpg`;

  return (
    <div
      style={{
        ...cardContainerStyle,
        height: !moreInfo ? "460px" : "560px",
      }}
    >
      <div style={imgContainer}>
        <img style={imgStyle} src={imageSrc} alt={"props.alt"} />
      </div>
      <div style={flexContainer}>
        <div style={{ paddingLeft: "10px" }}>
          <p>
            <strong>Price:</strong> {props.price}
            <strong> $</strong>
          </p>
          <p>
            <strong> Location:</strong> {props.location}
          </p>
        </div>
        <div style={{ paddingLeft: "10px" }}>
          <button
            style={{
              ...toggleInfoButton,
              backgroundColor: !moreInfo ? "lightgreen" : "pink",
              transition: !moreInfo ? "all 500ms" : "all 500ms",
            }}
            onClick={() => setZoom(!moreInfo)}
          >
            More info
          </button>
        </div>

        {moreInfo ? (
          <div style={isVisible}>
            <p>{props.moreInfo}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};
const cardContainerStyle: CSSProperties = {
  backgroundColor: "white",
  borderRadius: "10px",
  width: "400px",
  maxHeight: "600px",
  marginTop: "20px",
  marginBottom: "10px",
  boxShadow: "5px 10px 10px #eee",
  transition: "height 500ms",
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
  height: "20rem",
};

const isVisible: CSSProperties = {
  maxHeight: "10rem",
  transition: "opacity 800ms",
  paddingLeft: "10px",
  marginBottom: "10px",
};
const flexContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
};
const toggleInfoButton: CSSProperties = {
  borderRadius: "3px",
  color: "white",
  padding: "10px",
  border: "none",
  width: "80px",
  outline: "none",
};

export default CardComponent;
