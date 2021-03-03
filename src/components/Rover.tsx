import React, {Component, CSSProperties } from 'react'
import Button from './Button'
import RoverImage from './RoverImage'

interface Props{
  increment: () => void
  decrease: () => void
  roverUrl: string
}

interface State {
  isLoaded: boolean,
  photos: Photo[],
  page: number,
  url: string,
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
    this.decrease = this.decrease.bind(this)
    this.state = {
      photos: [],
      isLoaded: false,
      page: 1,
      url: ''
    };
  } 

  readonly API_KEY = '&api_key=zfkSEV7bRNw7EcoSFWNx4VgDEIOMjjAmULcT7abT'
  readonly API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?sol=1000&'



  componentDidMount() {   

    fetch(this.API_URL + 'page=' + this.state.page + this.API_KEY)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        photos: json.photos || [], 
      })
    });
  }

  // TODO: Ska jag försöka få in url state här?
  // componentDidUpdate(_: Props,prevState: State) {
  //   const { url } = this.state;
  //   if (url && prevState.url !== url) {
      
  //   }
  // }
  // }

  decrease() {
    if (this.state.page == 1) {
      return
    } else {
      this.setState({ page: this.state.page - 1})
      this.setState({url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?sol=1000&page=${this.state.page}&api_key=zfkSEV7bRNw7EcoSFWNx4VgDEIOMjjAmULcT7abT'})
      console.log(this.state.page)     
    }
  }

  increment() {
    console.log(this.state.url)
      this.setState({ page: this.state.page + 1})
      this.setState({url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?sol=1000&page=${this.state.page}&api_key=zfkSEV7bRNw7EcoSFWNx4VgDEIOMjjAmULcT7abT'})
      console.log(this.state.page)     
  }

  render() {

    const { isLoaded, photos } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }

    // Mappning av roverImage
    const roverImages = photos.map(image => (
      <div style={imageContainerStyling} key={image.id}>
        <div style={imageContainer} className="imageContainer">
          <RoverImage imageUrl={image.img_src}/>
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
          <div style={roverSection}>    
            <h2 style={h2Style}>Roverbilder</h2>
            {roverImages}
            <div style={btnStyling} className="btn-container">
              <Button btnText='Tillbaka'/>
              <button onClick={this.decrease}>Tillbaka</button>
              <button onClick={this.increment}>Nästa</button>
              <Button btnText='Nästa'/>
            </div>
          </div>

      </div>
    )
  }
}

export default Rover;

const roverSection:CSSProperties = {
  paddingTop: '6rem'
}

const h2Style: CSSProperties = {
  textAlign: 'center',
  color: 'white',
  fontSize: '2rem'
}

const imageContainerStyling: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '65%',
  margin: '0 auto',
  padding: '1rem',
  color: 'white',
}

const imageContainer: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  height: 'auto',
  width: '30rem',
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
