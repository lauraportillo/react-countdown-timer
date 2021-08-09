// TRABAJANDO EN ESTE CÓDIGO Y MEJORANDOLO

// React
import React, { useState, useEffect } from 'react';
// Components
import Timer from './Timer';
// Styles
import '../stylesheets/App.scss';

const App = () => {
  const hoursMinSecs = { hours: 1, minutes: 20, seconds: 40 };
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) reset();
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div className="App">
      <Timer hrs={hrs} mins={mins} secs={secs} />
    </div>
  );
};

export default App;

// // React
// import React, { useState, useEffect } from 'react';
// // Components
// import Timer from './Timer';
// // Styles
// import '../stylesheets/App.scss';

// const App = () => {
//   //state
//   const [minute, setMinute] = useState('20');
//   const [second, setSecond] = useState('40');
//   const [isActive, setIsActive] = useState(false);
//   const [counter, setCounter] = useState(0);

//   //useEffect
//   useEffect(() => {
//     let intervalId;

//     if (isActive) {
//       intervalId = setInterval(() => {
//         const secondCounter = counter % 60;
//         const minuteCounter = Math.floor(counter / 60);

//         const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
//         const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

//         setSecond(computedSecond);
//         setMinute(computedMinute);

//         setCounter((counter) => counter + 1);
//       }, 1000);
//     }

//     return () => clearInterval(intervalId);
//   }, [isActive, counter]);

//   const handleReset = () => {
//     setIsActive(false);
//     setCounter(0);
//     setSecond('00');
//     setMinute('00');
//   };

//   return (
//     <>
//       <Timer
//         second={second}
//         minute={minute}
//         isActive={isActive}
//         counter={counter}
//         setIsActive={setIsActive}
//         handleReset={handleReset}
//       />
//     </>
//   );
// };

// export default App;
