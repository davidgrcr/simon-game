import React from "react";
import './ButtonLink.scss'


export default React.memo(function ButtonLink(props) {
  const {handleClickStart = ()=>{}, isOn= false} = props;
  
  return (
    <button className="buttonLink" onClick={() => handleClickStart(isOn)}>
      {!isOn ? 'START' : 'FINISH'}
    </button>
  );
})