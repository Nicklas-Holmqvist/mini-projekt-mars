import { render } from "@testing-library/react";
import React from "react";

class Rover extends React.Component {
  state = {
    loading: true,
    info: [],
  };

  async componentDidMount() {
    const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY";

    const response = await fetch(url);
    const data = await response.json();
    const roverPhotos = data.photos;
    // const imageUrl = roverPhotos[0].img_src
    console.log(roverPhotos[0].img_src);

  }

  render() {
    return (
      <p>hej</p>
    )
  }

}

export default Rover;
