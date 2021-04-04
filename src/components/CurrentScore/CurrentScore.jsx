import React from "react";

import "./CurrentScore.scss";

export default React.memo(function CurrentScore(props) {
  const { currentScore = 0 } = props;
  return <div className="currentScore">{currentScore}</div>;
});
