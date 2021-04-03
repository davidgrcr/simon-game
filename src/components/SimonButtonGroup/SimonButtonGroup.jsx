import React, { useState, useEffect, useContext } from "react";

import SimonButton from "./../SimonButton/SimonButton";
import "./SimonButtonGroup.scss";
import { basicsColor } from "./../../CONSTANTS.js";

export default function SimonButtonGroup(props) {
  const { handleOnClick = () => {}, flashedColor = "", isReseting = false } = props;

  return (
    <div className={"simonButtonGroup" + (isReseting ? " reset" : "")}>
      {basicsColor.map((color, i) => {
        return (
          <SimonButton
            key={i}
            color={color}
            handleOnClick={handleOnClick}
            flashedColor={flashedColor}
          />
        );
      })}
    </div>
  );
}
