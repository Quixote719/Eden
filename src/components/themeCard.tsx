import React from 'react';
import styles from './index.module.less';

interface cardProps {
  titleCN?: string,
  titleEN?: string,
  content?: string,
  bgColor: string,
  fontColor: string
}

const Card = (props: cardProps) => {
  return (
    <div className={styles.card} style={{background: props.bgColor, color: props.fontColor}}>
      {props.titleCN && <div className={styles.CardCNTitle}>{props.titleCN || 'Title'}</div>}
      {props.titleEN && <div className={styles.CardENTitle}>{props.titleEN || 'Title'}</div>}
    </div>
  );
};

export default Card;
