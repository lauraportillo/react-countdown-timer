// Styles
import '../stylesheets/Timer.scss';

const Timer = (props) => {
  const timerMinutes = props.minutes < 10 ? `0${props.minutes}` : props.minutes;
  const timerSeconds = props.seconds < 10 ? `0${props.seconds}` : props.seconds;

  return (
    // 2 different ways to write the same, but one of them with less code
    <div>
      <div>
        {props.minutes.toString().padStart(2, '0')}:{props.seconds.toString().padStart(2, '0')}
      </div>
      <div>
        {timerMinutes}:{timerSeconds}
      </div>
    </div>
  );
};

export default Timer;
