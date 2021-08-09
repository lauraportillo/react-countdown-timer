// // Styles
// import '../stylesheets/Timer.scss';
// import React from 'react';

// const Timer = (props) => {
//   return (
//     <div>
//       <div>
//         <div className="counter">
//           <span className="counter__hr"> {props.hrs.toString().padStart(2, '0')} </span>
//           <span>:</span>
//           <span className="counter__min">{props.mins.toString().padStart(2, '0')}</span>
//           <span>:</span>
//           <span className="counter__sec">{props.secs.toString().padStart(2, '0')}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timer;

import React, { useState, useEffect } from 'react';

function Timer() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(1);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds, minutes, displayMessage]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      <div className="message">{displayMessage && <span> Break time!</span>}</div>
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
    </div>
  );
}

export default Timer;
