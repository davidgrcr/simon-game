import "./App.css";
import React, { useState, useEffect, useContext } from "react";

import CurrentScore from "./components/CurrentScore/CurrentScore";
import ButtonLink from "./components/ButtonLink/ButtonLink";
import SimonButtonGroup from "./components/SimonButtonGroup/SimonButtonGroup";
import { basicsColor, defaultValues } from "./CONSTANTS";
import delay from "./utils";

export default function App() {
  const [configuration, setConfiguration] = useState(defaultValues);

  useEffect(() => {
    if (configuration.isOn) {
      setConfiguration({
        ...configuration,
        userColors: [
          ...configuration.userColors,
          basicsColor[Math.floor(Math.random() * 4)],
        ],
      });
    } else {
      setConfiguration({ ...configuration, userColors: [], canPlay: false });
    }
  }, [configuration.isOn]);

  useEffect(() => {
    if (configuration.isOn && configuration.userColors.length) {
      displayColors();

    }
  }, [configuration.isOn, configuration.userColors.length]);

  function addColor(){
    setConfiguration({
      ...configuration,
      userColors: [
        ...configuration.userColors,
        basicsColor[Math.floor(Math.random() * 4)],
      ],
    });
  }

  

  function reset() {
    setConfiguration(defaultValues);
  }

  function checkCorrectColor(color) {
    const colorToBe = configuration.colorStack.shift();
    return color === colorToBe;
  }

  function handleClickStart(isOn) {
    setConfiguration({
      ...configuration,
      isOn: !isOn,
    });
  }

  async function handleSimonButtonClick(color) {
    if (configuration.canPlay) {
      flashColor(color);
      await delay(2000);
      flashColor(null);
      let isCorrectColor = checkCorrectColor(color);
      if(!configuration.colorStack.length && isCorrectColor) {
        await delay(500);
        addColor();
      } else if(!isCorrectColor){
        reset();
      }
    }
  }

  function flashColor(color) {
    setConfiguration({ ...configuration, flashedColor: color });
  }

  async function displayColors() {
    for (let i = 0; i < configuration.userColors.length; i++) {
      flashColor(configuration.userColors[i]);
      await delay(2000);
      flashColor(null);
      await delay(500);
    }

    setConfiguration({
      ...configuration,
      canPlay: true,
      colorStack: [...configuration.userColors]
    });
  }

  return (
    <div className="App">
      <CurrentScore currentScore={configuration.userColors.length} />
      <SimonButtonGroup
        handleOnClick={handleSimonButtonClick}
        flashedColor={configuration.flashedColor}
      />
      <ButtonLink
        handleClickStart={handleClickStart}
        isOn={configuration.isOn}
      />
    </div>
  );
}

/**
 * Funcio de quan es clica a un color
 * copiar l'array de color
 * crear la manera de incrementar quan l'usuari ho ha fet be
 * no permetre que cliqui en un color si encara no sha acabat de mostrar l'ordre
 */
