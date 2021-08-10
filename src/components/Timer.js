// Styles
import '../stylesheets/Timer.scss';

const Timer = (props) => {
  return (
    <>
      <h1>countdown timer </h1>
      <div className="timer">
        <div className="timer__num">
          {props.hours.toString().padStart(2, '0')}:{props.minutes.toString().padStart(2, '0')}:
          {props.seconds.toString().padStart(2, '0')}
        </div>
      </div>
    </>
  );
};

export default Timer;
