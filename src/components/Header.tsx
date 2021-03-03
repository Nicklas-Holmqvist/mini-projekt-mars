import React, { CSSProperties } from "react";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HamburgerMenu from "./Menu";
import ErrorBoundary from "./ErrorBoundary";
interface Props {
  text: string;
}
function Header(props: { text: React.ReactNode }) {
  return (
    <>
      <div style={header}>
        <ErrorBoundary>
          <HamburgerMenu />
          <FontAwesomeIcon style={iconStyle} icon={faMoon} />
        </ErrorBoundary>
        <h2 style={{ fontSize: "40px" }}>{props.text}</h2>
      </div>
    </>
  );
}

const header: CSSProperties = {
  background: "#621919",
  height: "5rem",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 1rem",
  position: "fixed",
  top: "0",
  width: "100%",
};

const iconStyle: CSSProperties = {
  fontSize: "1.7rem",
  position: "fixed",
  top: "25px",
  right: "40px",
};

export default Header;
