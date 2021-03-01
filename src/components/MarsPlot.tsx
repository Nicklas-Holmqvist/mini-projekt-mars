
import React, { CSSProperties } from 'react';


function MarsPlot() {

    return(
        <>
      
        <div style={mainContainer}>

            <div className="cardContainer" style={cardContainerStyle}>

            </div>

        </div>
        </>

    );

}



const mainContainer: CSSProperties = {
    background: '#E5E5E5',
    display: 'flex',
    // marginTop: '4rem',
    height: '100vh',
    width: '100%'


}


const cardContainerStyle: CSSProperties = {
    padding: '1rem'
}

export default MarsPlot;