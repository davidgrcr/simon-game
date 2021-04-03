import { useState, useEffect } from "react";

function useGameStatus() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    console.log(`The value of start is: ${start} useGameStatus`);
  });

  return start;
}


export default useGameStatus;