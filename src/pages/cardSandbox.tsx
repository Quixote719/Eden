import React, {useEffect} from 'react';
import getImage from '../utils/pageToImage.ts'
import ThemeCard from '../components/themeCard.tsx'
import colorPallete from '../components/colorPallete.ts'
import { cardTitleCN, cardTitleEN } from '@/constants/index.ts'
import styles from './index.module.less';

const Earth = () => {
  const downloadCardImage = () => {
      const node = document.getElementById('mythCard');
      getImage(node)
  }

  return (
    <div>
        <button onClick={()=>downloadCardImage()} className={styles.downloadBtn} style={{margin: '10px', display: 'block'}}>download the card image</button>
        <div className={styles.cardDiv} id='mythCard'>
          <ThemeCard titleCN={cardTitleCN} titleEN={cardTitleEN} fontColor={colorPallete(3)[3]} bgColor={colorPallete(3)[1]}/> 
        </div>
    </div>
  );
};

export default Earth;
