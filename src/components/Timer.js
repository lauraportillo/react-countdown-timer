// Styles
import '../stylesheets/Timer.scss';

const Timer = (props) => {
  return (
    <div className="container">
      <h1 className="container__title">countdown timer </h1>
      <h3 className="container__subitle">time remaining</h3>
      <div className="container__timer">
        <div className="container__timer--num">
          {props.hours.toString().padStart(2, '0')}:{props.minutes.toString().padStart(2, '0')}:
          {props.seconds.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default Timer;
