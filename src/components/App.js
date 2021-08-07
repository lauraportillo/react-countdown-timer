// React
import React, { useState } from 'react';
// Components
import Timer from './Timer';
// Styles
import '../stylesheets/App.scss';

const App = (props) => {
  //state
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Timer second={second} minute={minute} isActive={isActive} counter={counter} />
    </>
  );
};

export default App;
