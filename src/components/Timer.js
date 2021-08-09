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
      </div>
    </div>
  );
};

export default Timer;
