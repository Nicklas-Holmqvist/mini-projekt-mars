
import React, { CSSProperties } from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MarsPlot() {

    return(
        <>
        <div style={header}>
        <FontAwesomeIcon icon={faBars} />
            <h2>Properties on Mars</h2>
            <span></span>

        </div>
        <div style={mainContainer}>

        </div>
        </>

    );

}

const header: CSSProperties = {
    background: '#8A2424',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1rem'

}


const mainContainer: CSSProperties = {
    background: '#E5E5E5',
    display: 'flex',
    marginTop: '4rem',
    height: '100%',
    width: 'auto'


}


export default MarsPlot;