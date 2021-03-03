import React, { CSSProperties } from 'react';


interface Props {
    imageUrl:string
}

function RoverImage(props:Props) {
    return(
        <img style={imageStyling} src={props.imageUrl} alt=""/>

    )
}

export default RoverImage

const imageStyling: CSSProperties = {
    width: '100%'
    
  }
