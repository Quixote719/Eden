import React, {useEffect, useState} from 'react';
import getImage from '../utils/pageToImage.ts'
import Card from '../components/card.tsx'
import colorPallete from '../components/colorPallete.ts'
import styles from './index.module.less';

const Earth = () => {
  const [imageDownload, setImageDownload] = useState(false)
  useEffect(() => {
    if(!imageDownload){
      const node = document.getElementById('mythCard');
      getImage(node).then(setImageDownload(true))
    }
  }, [])

  return (
    <div>
      <div id='mythCard'>
        <Card title={"Cabala"} content={"Cabala origins in ..."} bgColor={colorPallete(2)[3]}/> 
      </div>
    </div>
  );
};

export default Earth;
