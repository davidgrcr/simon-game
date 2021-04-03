import "./CurrentScore.scss";

export default function CurrentScore(props) {
  const { currentScore = 0 } = props;

  return <div className="currentScore">{currentScore}</div>;
}
