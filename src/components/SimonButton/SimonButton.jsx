import './SimonButton.scss'
import React, { useState, useEffect, useContext } from "react";

import {ConfigurationContext} from './../../configuration-context';


export default function SimonButton({ color, test }) {
  const {flashedColor= '', handleSimonButtonClick, canPlay =false} = useContext(ConfigurationContext);

  console.log(canPlay);
  const selectedColor = flashedColor === color ? '__selected ' : ' ';
  const f = canPlay ? ()=>{handleSimonButtonClick(color)} : ()=>{}


    return <div onClick={f} className={"simonButton" + selectedColor + color}></div>;
  }
  