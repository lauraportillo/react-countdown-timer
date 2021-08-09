// Styles
import '../stylesheets/Timer.scss';

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
