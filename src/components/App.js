// React
import React, { useState, useEffect } from 'react';
// Components
import Timer from './Timer';
// Styles
import '../stylesheets/App.scss';

const App = () => {
  //state
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(3);
  const [message] = useState('Stop the game');

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
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds, minutes]);

  return (
    <div className="app">
      <Timer seconds={seconds} minutes={minutes} hours={hours} message={message} />
    </div>
  );
};

export default App;
