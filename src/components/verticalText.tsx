import React from 'react';
import styles from './index.module.less';
import TaiHua from '@/images/taihua.png'

interface cardProps {
  verticalLines: Array<string>,
  bgColor: string,
  fontColor: string
}

const DoubleFalls = (props: cardProps) => {
  return (
    <div>
      <div className={styles.card} style={{background: props.bgColor, color: props.fontColor}}>
        { 
            props.verticalLines.map(item => 
                <div className={styles.verticalLine}>{item}</div>
            ) 
        }
      </div>
      <img className={styles.taihuaIcon} src={TaiHua} alt="icon" />
    </div>
  );
};

export default DoubleFalls;
