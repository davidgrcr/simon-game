import './CurrentScore.scss'

import useGameStatus from "./../../hooks/useGameStatus";
import { useState } from "react";

export default function CurrentScore(props) {
  const { isOn = false } = props;

  return <div className="currentScore">{isOn ? 1 : 0}</div>;
}