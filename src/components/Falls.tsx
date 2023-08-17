import React from 'react';
import styles from './index.module.less';
import bluebird from '@/images/bluebird.png'

interface cardProps {
  leftRoll: string,
  rightRoll: string,
  bgColor: string,
  fontColor: string
}

const DoubleFalls = (props: cardProps) => {
  return (
    <div>
      <div className={styles.card} style={{background: props.bgColor, color: props.fontColor}}>
        <div className={styles.leftRoll}>{props.leftRoll}</div>
        <div className={styles.rightRoll}>{props.rightRoll}</div>
      </div>
      <img className={styles.bluebirdIcon} src={bluebird} alt="icon" />
    </div>
  );
};

export default DoubleFalls;
