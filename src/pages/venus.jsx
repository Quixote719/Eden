import React, { useState, useRef, useEffect } from 'react';
import styles from './index.module.less';

const CarouselEl = 'SATURN'.split('');

const Venus = props => {
  const [curCrIndex, setCurCrIndex] = useState(0);
  const curCrNumber = useRef(0);
  const setScroll = useRef(false);

  useEffect(() => {
    if (!setScroll.current) {
      setScroll.current = true;
      setInterval(() => {
        curCrNumber.current =
          curCrNumber.current < CarouselEl.length - 1 ? curCrNumber.current + 1 : 0;
        setCurCrIndex(curCrNumber.current);
      }, 1500);
    }
  }, []);

  const generateCarousel = () => {
    return (
      <div className={styles.carouselWindow}>
        <div
          className={styles.carouselItemBlock}
          style={{ width: CarouselEl.length * 600, left: curCrIndex * -600 }}
        >
          {CarouselEl.map((item, key) => (
            <div className={styles.carouselItem} key={key}>
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <div>{generateCarousel()}</div>;
};

export default Venus;
