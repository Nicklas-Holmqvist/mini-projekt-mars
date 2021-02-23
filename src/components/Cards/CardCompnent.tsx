import React from "react";
const CardComponent = (props: {
  image: string | undefined;
  alt: string | undefined;
}) => {
  return (
    <div>
      <div>
        <img src={props.image} alt={props.alt} />
      </div>
      <div>
        <p>Price:</p>
        <p>Location:</p>
      </div>
    </div>
  );
};
export default CardComponent;
