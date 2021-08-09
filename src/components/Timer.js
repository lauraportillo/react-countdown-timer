// TRABAJANDO EN ESTE CÓDIGO Y MEJORANDOLO

// Styles
import '../stylesheets/Timer.scss';
import React from 'react';

const Timer = (props) => {
  return (
    <div>
      <p>{`${props.hrs.toString().padStart(2, '0')}:${props.mins.toString().padStart(2, '0')}:${props.secs
        .toString()
        .padStart(2, '0')}`}</p>
    </div>
  );
};

export default Timer;

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
