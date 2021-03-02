import React, { Component, CSSProperties, ErrorInfo } from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'

interface Props extends RouteComponentProps {}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {

  state: State = {
    hasError: false
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch?(error: Error, errorInfo: ErrorInfo): void {
    console.log({error, errorInfo})
  }

  navigateBack = () => {
    this.props.history.goBack();
    window.location.replace('/')
  }


  render() {
    if (this.state.hasError) {
      return (
        <div style={rootStyle}>
          <h2 style={textStyle}>ERROR 404</h2>
          <img src="./assets/mars-spinning.gif" alt="mars spinning"/>
          <button style={buttonStyle} onClick={this.navigateBack}>Gå Tillbaka</button>
        </div>
      );
    }
    
    return this.props.children
    
  }
}

const rootStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center',
  flexDirection: 'column',
  background: '#040204'
}

const textStyle: CSSProperties = {
  textAlign: 'center',
  color: 'white',
  fontSize: '2.5rem',
  transform: 'rotate(-12deg)',
  marginBottom: '3rem'
}

const buttonStyle: CSSProperties = {
  background: 'white',
  border: '1px solid black',
  borderRadius: '6px',
  padding: '.75rem 1.5rem',
  fontFamily: 'inherit',
  cursor: 'pointer',
  outline: 'none'
}

export default withRouter(ErrorBoundary);