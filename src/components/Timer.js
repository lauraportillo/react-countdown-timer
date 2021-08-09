// TRABAJANDO EN ESTE CÓDIGO Y MEJORANDOLO

// Styles
import '../stylesheets/Timer.scss';
import React from 'react';

const Timer = (props) => {
  return (
    <div>
      <div>
        <div className="counter">
          <span className="counter__hr"> {props.hrs.toString().padStart(2, '0')} </span>
          <span>:</span>
          <span className="counter__min">{props.mins.toString().padStart(2, '0')}</span>
          <span>:</span>
          <span className="counter__sec">{props.secs.toString().padStart(2, '0')}</span>
        </div>
        {/* <div className="btns">
          <button onClick={() => props.setIsActive(!props.isActive)} className="btns__start">
            {props.isActive ? 'Pause' : 'Start'}
          </button>
          <button onClick={handleReset} className="btns__reset">
            Reset
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Timer;
