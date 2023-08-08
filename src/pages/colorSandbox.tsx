import React from 'react';
import colorPallete from '../components/colorPallete.ts'
import styles from './index.module.less';

const Venus = () => {
  const genPallete = (param:number) => {
    const colors = colorPallete(param)
    return <div className={styles.colorFlexBox}>
      {colors.map(item => { 
        return <div className={styles.colorBlock} style={{background: item}}></div>
      })}
    </div>

  }

  return (
    <div className={styles.pageContainer}>
      <div>{genPallete(0)}</div>
      <div>{genPallete(1)}</div>
      <div>{genPallete(2)}</div>
      <div>{genPallete(3)}</div>
      <div>{genPallete(4)}</div>
      <div>{genPallete(5)}</div>
      <div>{genPallete(6)}</div>
    </div>
  );
};

export default Venus;
