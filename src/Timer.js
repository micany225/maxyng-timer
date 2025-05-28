import React, { useState, useEffect} from 'react';

const Timer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime((preTime) => prevTime - 1);
    }, 1000);
   
    return () => clearInterval(interval); 
  }, [time])

  return (
    <div>
      <h2>
        Time Left: {time} seconds.
      </h2>
    </div>
  )
}
export default Timer;
