// React
import React, { useState, useEffect } from 'react';
// Components
import Timer from './Timer';
// Styles
import '../stylesheets/App.scss';

const App = () => {
  //state
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(3);
  const [displayMessage, setDisplayMessage] = useState(false);

  //useEffect
  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
        if (minutes === 0) {
          if (hours !== 0) {
            setSeconds(59);
            setMinutes(59);
            setHours(hours - 1);
          }
        }
        if (hours === 0 && minutes === 0 && seconds === 0) {
          setDisplayMessage(true);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds, minutes]);

  // const handleMessage = () => {
  //   if (hours === 0 && minutes === 0 && seconds === 0) {
  //     return message;
  //   }
  // };

  return (
    <div className="app">
      <Timer seconds={seconds} minutes={minutes} hours={hours} displayMessage={displayMessage} />
    </div>
  );
};

export default App;
