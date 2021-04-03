import React, { useState, useEffect, useContext } from "react";

import SimonButton from "./../SimonButton/SimonButton";
import './SimonButtonGroup.scss'
import {basicsColor} from "./../../CONSTANTS.js";


export default function SimonButtonGroup(props) {

  return (
    <div className="simonButtonGroup">
      {basicsColor.map((color, i) => {
    return <SimonButton key={i} color={color} test={props.test}/>;
  })}
    </div>
  )

}
