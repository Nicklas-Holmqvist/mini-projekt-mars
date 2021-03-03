import React, { Component, CSSProperties } from "react";
import ReactDOM from "react-dom";
import ReactDom from "react-dom";

interface Props {
  closeModal: () => void;
}

class Modal extends Component<Props> {
  element: HTMLDivElement;

  constructor(props: Props) {
    super(props);
    this.element = document.createElement("div");
    this.element.className = "modal-root";
  }
  onClickHandeler = () => {
    this.props.closeModal;
  };
  componentDidMount() {
    document.body.appendChild(this.element);
  }
  componentWillUnmount() {
    document.body.removeChild(this.element);
  }
  render() {
    return ReactDOM.createPortal(
      <div style={modalStyling}>{this.props.children}</div>,
      this.element
    );
  }
}
const modalStyling: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: "rgba(0,0,0,0.8)",
  color: "white",
};
export default Modal;
