import React from "react";
import "../../styles/connectedDisplay.css";
import { LaptopMacRounded } from "@material-ui/icons";
import { useStateValue } from "../global-state-provider/StateProvider";

function ConnectedDisplay() {
  const [{ isUserOnDarkMode }] = useStateValue();
  return (
    <div className={`connectedDisplay ${isUserOnDarkMode ? "dark" : "light"}`}>
      <div className="connectedDisplay_wr">
        <img
          className="MercuryLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Signal-Logo.svg"
          alt="Welcome"
        />
        <h1 className={`${isUserOnDarkMode && "dark-mode-color1"}`}>
          Welcome to Mercury
        </h1>
        <p className={`${isUserOnDarkMode && "dark-mode-color1"}`}>
          We provide complete End-to-End encryption, so chat without worrying...
          P.S. There's a dark mode.
        </p>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default ConnectedDisplay;
