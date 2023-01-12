import React, { useEffect } from 'react';
import styles from './index.module.less';
import { increment, incrementByAmount, selectEarth } from '../slices/earthSlice';
import { useSelector, useDispatch } from 'react-redux';

const Earth = () => {
  const earthAge = useSelector(selectEarth);
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.centerLgTxt}>Earth</div>
      <div className={styles.centerLgTxt}>age: {earthAge}</div>
      <button className={styles.centerLgTxt} onClick={() => dispatch(increment())}>
        add one year
      </button>
    </div>
  );
};

export default Earth;
