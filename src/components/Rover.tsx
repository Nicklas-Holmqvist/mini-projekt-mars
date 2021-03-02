import React, {Component, CSSProperties } from 'react'

interface Props{}

interface State {
  isLoaded: boolean,
  photos: Photo[],
  
}

interface Photo {
  img_src: string,
  id: number,
  earth_date: string,  
  rover: Rover,
  camera: Camera    
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
      photos: [],
      isLoaded: false,
    };
  }

  componentDidMount() {

    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?sol=1000&page=3&api_key=zfkSEV7bRNw7EcoSFWNx4VgDEIOMjjAmULcT7abT')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        photos: json.photos || [], 
      })
    });
  }

  render() {

    const { isLoaded, photos } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }

    const roverImages = photos.map(image => (
      <div style={imageContainerStyling} key={image.id}>
        <div style={imageContainer} className="imageContainer">
          <img style={imageStyling} src={image.img_src} alt=""/>
        </div>
        <div style={imageInformation} className="imageInformation">
          <div className="text-content">
            <h3>Bildinformation</h3>
            <p>Rovernamn: {image.rover.name}</p>
            <p>Kamera: </p>
            <p>Bild tagen: {image.earth_date}</p>
          </div>
        </div>
      </div>
    ))

    console.log(photos)

    return (
      <div>
          <div>    
            <h2 style={h2Style}>Roverbilder</h2>
            {roverImages}
          </div>

      </div>
    )
  }

}

export default Rover;

const h2Style: CSSProperties = {
  textAlign: 'center',
}

const imageContainerStyling: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '50%',
  margin: '0 auto',
  padding: '1rem',
}

const imageContainer: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  width: '30rem',
  height: 'auto'
}

const imageStyling: CSSProperties = {
  width: '100%'
  
}

const imageInformation: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: '2rem'
}
