import React, {Component, CSSProperties } from 'react'
import Button from './Button'
import Header from './Header'
import RoverImage from './RoverImage'

interface Props{
  increment: () => void
  decrease: () => void
}

interface State {
  isLoaded: boolean,
  photos: Photo[],
  page: number,
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
    };
  } 

  readonly API_KEY = '&api_key=zfkSEV7bRNw7EcoSFWNx4VgDEIOMjjAmULcT7abT'
  readonly API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?sol=1000&'



  componentDidMount() {   
    this.fetchRoverData();
  }
  
  componentDidUpdate(_: Props, prevState: State) {
    if (this.state.page !== prevState.page) {
      this.fetchRoverData();
    }
  }
  
  fetchRoverData() {
    fetch(this.API_URL + 'page=' + this.state.page + this.API_KEY)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        photos: json.photos || [], 
      })
    });
  }

  decrease() {
    if (this.state.page == 1) {
      return
    } else {
      this.setState({ page: this.state.page - 1})   
    }
  }

  increment() {
      this.setState({ page: this.state.page + 1})
      
  }

  render() {
    console.log(this.state.page)

    const { isLoaded, photos } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }

    // Mappning of roverImages
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

    return (
      <div>
          <div style={roverSection}>    
            <Header text='Roverbilder'/>
            <div style={btnStyling} className="btn-container">
              <Button onClick={this.decrease}  btnText='Tillbaka'/>
              <Button onClick={this.increment} btnText='Nästa'/>
            </div>
            {roverImages}
            <div style={btnStyling} className="btn-container">
              <Button onClick={this.decrease}  btnText='Tillbaka'/>
              <Button onClick={this.increment} btnText='Nästa'/>
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
