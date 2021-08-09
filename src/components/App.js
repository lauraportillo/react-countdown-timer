// React
import React, { useState, useEffect } from 'react';
// Components
import Timer from './Timer';
// Styles
import '../stylesheets/App.scss';

const App = () => {
  //state
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(10);

  //useEffect
  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds, minutes]);
  return (
    <div>
      <Timer seconds={seconds} minutes={minutes} />
    </div>
  );
};

export default App;
