
import './ButtonLink.scss'


export default function ButtonLink(props) {
  const {handleClickStart = ()=>{}, isOn= false} = props;
  


  

  return (
    <button className="buttonLink" onClick={() => handleClickStart(isOn)}>
      {!isOn ? 'START' : 'FINISH'}
    </button>
  );
}