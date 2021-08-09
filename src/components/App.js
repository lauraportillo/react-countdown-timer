// // React
// import React, { useState, useEffect } from 'react';
// // Components
// import Timer from './Timer';
// // Styles
// import '../stylesheets/App.scss';

// const App = () => {
//   //state
//   const [hours] = useState('');
//   const [minutes] = useState('1');
//   const [seconds] = useState('1');
//   const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

//   const countDown = () => {
//     if (hrs === 0 && mins === 0 && secs === 0) reset();
//     else if (mins === 0 && secs === 0) {
//       setTime([hrs - 1, 59, 59]);
//     } else if (secs === 0) {
//       setTime([hrs, mins - 1, 59]);
//     } else {
//       setTime([hrs, mins, secs - 1]);
//     }
//   };

//   const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

//   useEffect(() => {
//     const timerId = setInterval(() => countDown(), 1000);
//     return () => clearInterval(timerId);
//   });

//   return (
//     <div className="App">
//       <Timer hrs={hrs} mins={mins} secs={secs} />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <header>
        <h1> Pomodoro</h1>
      </header>
      <Timer />
    </div>
  );
}

export default App;
