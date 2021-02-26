import React, {Component } from 'react'

interface Props{}

interface State {
  isLoaded: boolean,
  items: Items[],
  
}

interface Items {
  photos: [],
  img_src: string,
}

class Rover extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
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

    return (
      <div>
        <img src={items[0].img_src} alt=""/>
          <p>Data has been loaded</p>
      </div>
    )
  }



}
export default Rover;
