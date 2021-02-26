import React, { Component, CSSProperties } from 'react'
import LandingPage from "./LandingPage";
import HamburgerMenu from './Menu';
import Rover from './Rover';

interface Props {}
interface State {
    isMenuOpen: boolean;
}

class Layout extends Component<Props, State> {
    state: State = {
        isMenuOpen: false
    }
    
    marsAppStyle: CSSProperties = {
        backgroundColor: '#8A2424',
        height: '100%',
        width: '100%'
    }

    toggleSidebar = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen })
    }
    
    render () {
        return (
            <div className="marsApp" style={this.marsAppStyle}>
                <HamburgerMenu 
                    onIconClick={this.toggleSidebar} 
                    isOpen={this.state.isMenuOpen}
                />
                <LandingPage />
                <Rover />
            </div>
        )
    }    
}

export default Layout;