import React, {useEffect} from 'react';
import getImage from '../utils/pageToImage.ts'
import DoubleFalls from '../components/doubleFalls.tsx'
import colorPallete from '../components/colorPallete.ts'
import { inFire, inIce } from '@/constants/index.ts'
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
          <DoubleFalls leftRoll={inFire} rightRoll={inIce} fontColor={'#99FFFF'} bgColor={'#FBFDDC'}/> 
        </div>
    </div>
  );
};

export default Earth;
