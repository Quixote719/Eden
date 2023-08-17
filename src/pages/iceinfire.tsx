import React, {useEffect} from 'react';
import getImage from '../utils/pageToImage.ts'
import Falls from '../components/Falls.tsx'
import colorPallete from '../components/colorPallete.ts'
import { leftRollText, rightRollText } from '@/constants/index.ts'
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
          <Falls leftRoll={leftRollText} rightRoll={rightRollText} fontColor={'#99FFFF'} bgColor={'#FBFDDC'}/> 
        </div>
    </div>
  );
};

export default Earth;
