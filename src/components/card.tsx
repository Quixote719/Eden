import React from 'react';
import styles from './index.module.less';

interface cardProps {
  title: string,
  content: string,
  bgColor: string
}

const Card = (props: cardProps) => {
  return (
    <div className={styles.card} style={{background: props.bgColor || '#264653ff'}}>
      <div className={styles.cardTitle}>{props.title || 'Title'}</div>
      <div className={styles.cardContent}>{props.content || 'Content'}</div>
    </div>
  );
};

export default Card;
