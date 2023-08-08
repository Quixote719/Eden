import React, {useEffect} from 'react';
import getImage from '../utils/pageToImage.ts'
import Card from '../components/card.tsx'
import colorPallete from '../components/colorPallete.ts'
import styles from './index.module.less';

const Earth = () => {
  const downloadCardImage = () => {
      const node = document.getElementById('mythCard');
      getImage(node)
  }

  return (
    <div>
        <button onClick={()=>downloadCardImage()} className={styles.downloadBtn} style={{margin: '10px auto', display: 'block'}}>download the card image</button>
        <div id='mythCard'>
          <Card title={"Cabala"} content={"Cabala origins in ..."} bgColor={colorPallete(3)[1]}/> 
        </div>
    </div>
  );
};

export default Earth;
