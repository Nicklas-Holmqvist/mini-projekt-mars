import React, {Component, CSSProperties } from 'react'
import { setConstantValue } from 'typescript';
import Button from './Button'

interface Props{
  increment: () => void
}

interface State {
  isLoaded: boolean,
  photos: Photo[],
  page: number,
  url: string
  
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
    super(props)
    this.increment = this.increment.bind(this)
    this.state = {
      photos: [],
      isLoaded: false,
      page: 1,
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?sol=1000&page=${this.state.page}&api_key=zfkSEV7bRNw7EcoSFWNx4VgDEIOMjjAmULcT7abT'
    };
  } 

  componentDidMount() {

    fetch(this.state.url)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        photos: json.photos || [], 
      })
    });
  }

  increment() {
    // console.log(this.state.url)
      this.setState({ page: this.state.page + 1})
      this.setState({url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?sol=1000&page=${this.state.page}&api_key=zfkSEV7bRNw7EcoSFWNx4VgDEIOMjjAmULcT7abT'})
      console.log(this.state.page)  
   
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
            <p>Kamera: {image.camera.full_name}</p>
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
            <div style={btnStyling} className="btn-container">
              <Button btnText='Tillbaka'/>
              <button onClick={this.increment}>Tillbaka</button>
              <Button btnText='Nästa'/>
            </div>
          </div>

      </div>
    )
  }

}

export default Rover;

const h2Style: CSSProperties = {
  textAlign: 'center',
  color: 'white',
}

const imageContainerStyling: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '50%',
  margin: '0 auto',
  padding: '1rem',
  color: 'white',
}

const imageContainer: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  height: 'auto',
  width: '20rem',
}

const imageStyling: CSSProperties = {
  width: '100%'
  
}

const imageInformation: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingLeft: '2rem',
  width: '20rem'
}

const btnStyling: CSSProperties = {
  maxWidth: '48rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '0 auto',
  padding: '1rem 0 2rem 0'
}
