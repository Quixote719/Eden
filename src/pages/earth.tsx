import React from 'react';
import styles from './index.module.less';

const Earth = (props: any) => {
  return (
    <div>
      <div className={styles.btn} onClick={props.connectMetaMask}>
        connect metamask
      </div>
    </div>
  );
};

export default Earth;
