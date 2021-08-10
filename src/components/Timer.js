// Styles
import '../stylesheets/Timer.scss';

const Timer = (props) => {
  return (
    <div>
      {props.hours.toString().padStart(2, '0')}:{props.minutes.toString().padStart(2, '0')}:
      {props.seconds.toString().padStart(2, '0')}
    </div>
  );
};

export default Timer;
