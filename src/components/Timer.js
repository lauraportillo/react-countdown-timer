// Styles
import '../stylesheets/Timer.scss';

const Timer = (props) => {
  // const handleMessage = () => {
  //   props.handleMessage();
  // };
  return (
    <div className="container">
      <h1 className="container__title">Countdown timer </h1>
      <h3 className="container__subitle">Time remaining</h3>
      <div className="container__timer">
        <div className="container__timer--num">
          {props.hours.toString().padStart(2, '0')}:{props.minutes.toString().padStart(2, '0')}:
          {props.seconds.toString().padStart(2, '0')}
        </div>
      </div>
      <h3>{props.displayMessage && <span>Stop the game!</span>}</h3>
    </div>
  );
};

export default Timer;
