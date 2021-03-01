import React, {Component } from 'react'

interface Props{}

interface State {
  isLoaded: boolean,
  items: Items[],
  
}

interface Items {
  photos: [],
  img_src: string,
  id: number,
  earth_date: string,  
  rover: Rover[],
  camera: Camera[]    
}
interface Camera {
  full_name: string
}
interface Rover {
  name: string
}

class Rover extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {

    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?sol=1000&page=1&api_key=DEMO_KEY')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json.photos, 
      })
    });
  }

  render() {

    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }

    const roverImages = items.map(image => (
      <div key={image.id}>
          <img src={image.img_src} alt=""/>
          <p>{image.earth_date}</p>
      </div>
    ))

    console.log(items)

    return (
      <div>
        <img src={items[0].img_src} alt=""/>
          <p>{items[0].id}</p>
          <p>{items[0].earth_date}</p>   
          <div>    
            {roverImages}
          </div>

      </div>
    )
  }



}
export default Rover;
