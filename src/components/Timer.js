import '../stylesheets/Timer.scss';

const Timer = (props) => {
  return (
    <div>
      <div className="counter">
        <span className="counter__min">{props.minute}</span>
        <span>:</span>
        <span className="counter__sec">{props.second}</span>
      </div>
      <div className="btns">
        <button onClick={() => props.setIsActive(!props.isActive)} className="btns__start">
          {props.isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={() => null} className="btns__reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
