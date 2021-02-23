import { render } from "@testing-library/react";
import React from "react";

class Rover extends React.Component {
  state = {
    loading: true,
    info: [],
  };

  async componentDidMount() {
    const url = "här ska nasa api ligga";

    const response = await fetch(url);
    const data = await response.json();
    const roverPhotos = data.photos;
    console.log(roverPhotos);
  }
  render() {
    return <p>hej</p>;
  }
}
export default Rover;
