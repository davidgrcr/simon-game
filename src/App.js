import "./App.css";
import React, { useState, useEffect, useContext } from "react";

import CurrentScore from "./components/CurrentScore/CurrentScore";
import ButtonLink from "./components/ButtonLink/ButtonLink";
import SimonButtonGroup from "./components/SimonButtonGroup/SimonButtonGroup";
import { basicsColor, defaultValues } from "./CONSTANTS";
import delay from "./utils";
import { ConfigurationContext } from "./configuration-context";

export default function App() {
  const [configuration, setConfiguration] = useState(defaultValues);

  const [showDrawer, setShowDrawer] = useState(false);

  const toggleCheckoutDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  useEffect(() => {
    if (configuration.isOn) {
      setConfiguration({
        ...configuration,
        userColors: [
          ...configuration.userColors,
          basicsColor[Math.floor(Math.random() * 4)],
        ],
        handleSimonButtonClick: handleSimonButtonClick,
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

  function handleSimonButtonClick(color) {
      setConfiguration({ ...configuration, flashedColor: color });
  }

  function handleClickStart(isOn) {
    setConfiguration({
      ...configuration,
      isOn: !isOn,
    });
  }

  function flashColor(color) {
    setConfiguration({ ...configuration, flashedColor: color });
  }

  function test(){
    console.log("configuration", configuration)

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
    });
  }

  return (
    <div className="App">
      <CurrentScore isOn={configuration.isOn} />
      <ConfigurationContext.Provider value={configuration}>
        <SimonButtonGroup test={test}/>
      </ConfigurationContext.Provider>
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
