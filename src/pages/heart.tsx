import React, {useEffect} from 'react';
import getImage from '../utils/pageToImage.ts'
import VerticalText from '../components/verticalText.tsx'
import colorPallete from '../components/colorPallete.ts'
import { leftRollText, rightRollText } from '@/constants/index.ts'
import styles from './index.module.less';

const Earth = () => {
  const downloadCardImage = () => {
      const node = document.getElementById('mythCard');
      getImage(node)
  }
  
  const heartArr = ['人心惟危', '道心惟微', '惟精惟一', '允执厥中'].reverse()

  return (
    <div>
        <button onClick={()=>downloadCardImage()} className={styles.downloadBtn} style={{margin: '10px', display: 'block'}}>download the card image</button>
        <div className={styles.cardDiv} id='mythCard'>
          <VerticalText verticalLines={heartArr} fontColor={'#2A2D36'} bgColor={colorPallete(0)[4]}/> 
        </div>
    </div>
  );
};

export default Earth;
