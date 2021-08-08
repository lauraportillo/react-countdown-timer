// // Styles
// import '../stylesheets/Timer.scss';

// const Timer = (props) => {
//   const handleReset = () => {
//     props.handleReset();
//   };

//   return (
//     <div>
//       <div className="counter">
//         <span className="counter__min">{props.minute}</span>
//         <span>:</span>
//         <span className="counter__sec">{props.second}</span>
//       </div>
//       <div className="btns">
//         <button onClick={() => props.setIsActive(!props.isActive)} className="btns__start">
//           {props.isActive ? 'Pause' : 'Start'}
//         </button>
//         <button onClick={handleReset} className="btns__reset">
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Timer;

// COPIA 1
import React from 'react';
// Styles
import '../stylesheets/Timer.scss';

// const Timer = (props) => {
//   const handleReset = () => {
//     props.handleReset();
//   };

const Timer = ({ hoursMinSecs }) => {
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
    <div>
      <p>{`${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs
        .toString()
        .padStart(2, '0')}`}</p>
    </div>
  );
};

export default Timer;
