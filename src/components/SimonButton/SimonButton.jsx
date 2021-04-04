import "./SimonButton.scss";

export default function SimonButton({ color, handleOnClick, flashedColor }) {
  const selectedColor = flashedColor === color ? "__selected " : " ";
  return (
    <div
      onClick={() => {
        handleOnClick(color);
      }}
      className={"simonButton" + selectedColor + color}
    ></div>
  );
}
