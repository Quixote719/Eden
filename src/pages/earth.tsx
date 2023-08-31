import React from 'react';
import styles from './index.module.less';

console.log(999, import.meta.env)
const Earth = () => {
  return (
    <div>
      <div className={styles.pageTitle}>Earth</div>
    </div>
  );
};

export default Earth;
