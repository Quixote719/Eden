import React, { useState, useRef, useEffect, useLayoutEffect, useContext } from 'react';
import Moment from 'moment';
import solarContext from '../context/solarContext';
import styles from './index.module.less';

const Timer = () => {
  const [time, setTime] = useState('');
  useEffect(() => {
    console.log('useEffect');
    let timeIt = setInterval(() => {
      setTime(Moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);
    return () => {
      console.log('useEffect end');
      clearInterval(timeIt);
    };
  }, []);

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    return () => {
      console.log('useLayoutEffect end');
    };
  }, []);

  return (
    <div>
      <div className={styles.timeBlock}>{time}</div>
    </div>
  );
};

const Earth = () => {
  const [showTimer, setTimer] = useState(false);
  const solarContextProps = useContext(solarContext);
  const changeTimer = () => {
    setTimer(!showTimer);
  };

  return (
    <div>
      <button onClick={changeTimer}>toggle timer</button>
      {showTimer && <Timer />}
      <div>{solarContextProps.name}</div>
    </div>
  );
};

export default Earth;
