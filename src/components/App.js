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

// TRABAJANDO EN ESTE CÓDIGO Y MEJORANDOLO

// React
import React, { useState, useEffect } from 'react';
// Components
import Timer from './Timer';
// Styles
import '../stylesheets/App.scss';

const App = () => {
  //state
  const [hour, setHour] = useState('1');
  const [minute, setMinute] = useState('20');
  const [second, setSecond] = useState('40');
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  const hoursMinSecs = { hours: 1, minutes: 20, seconds: 40 };
  // const handleReset = () => {
  //   setIsActive(false);
  //   setCounter(0);
  //   setMinute('20');
  //   setSecond('40');
  // };
  return (
    <div className="App">
      <Timer
        hour={hour}
        second={second}
        minute={minute}
        isActive={isActive}
        counter={counter}
        setIsActive={setIsActive}
        // handleReset={handleReset}
        hoursMinSecs={hoursMinSecs}
      />
    </div>
  );
};

export default App;
