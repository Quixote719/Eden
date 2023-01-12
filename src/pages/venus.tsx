import React from 'react';
import styles from './index.module.less';
import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementByAmount, selectVenus } from '../slices/venusSlice';

const Venus = () => {
  const venusAge = useSelector(selectVenus);
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.centerLgTxt}>Venus</div>
      <div className={styles.centerLgTxt}>age: {venusAge}</div>
      <button className={styles.centerLgTxt} onClick={() => dispatch(increment())}>
        add one year
      </button>
    </div>
  );
};

export default Venus;
