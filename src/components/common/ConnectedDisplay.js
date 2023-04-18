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
          className={`${isUserOnDarkMode ? "dark" : "light"}`}
          src="https://user-images.githubusercontent.com/101616957/228490125-befc41fc-c737-43a9-86d5-0005897a0531.png"
          alt="Welcome"
        />
        <h1 className={`${isUserOnDarkMode && "dark-mode-color1"}`}>
          Welcome to my WhatsApp.
        </h1>
        <p className={`${isUserOnDarkMode && "dark-mode-color1"}`}>
          We provide complete End-to-End encryption, so chat without worrying...
          P.S. There's a dark mode.
        </p>
        <div>
          <LaptopMacRounded />
          <p className={`${isUserOnDarkMode && "dark-mode-color1"}`}>
            WhatsApp is available for MacOS.{" "}
            <a href="https://www.whatsapp.com/download">Get it here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConnectedDisplay;
