import React from 'react';
import getImage from '../utils/pageToImage.ts'
import colorPallete from '../components/colorPallete.ts'
import styles from './index.module.less';

const colorMap = {
  "#e63946" : 'Poppy Red',
  "#f1faee" : 'Winter Oasis',
  "#a8dadc" : 'Crystal',
  "#457b9d" : 'Linoleum Blue',
  "#1d3557" : 'Elite Blue'
}

const Jupiter = () => {
  const parseHex = (color: string) => {
    color = color.replace('#', '').replace('ff','').toUpperCase()
    return color
  }

  const downloadCardImage = () => {
    const node = document.getElementById('mythCard');
    getImage(node)
  }

  const getTextColor = (item) => {
    let colorArr = [], len = item.length, colorHex = parseHex(item)
    console.log('colorHex', colorHex)
    colorArr.push(colorHex.slice(0,2))
    colorArr.push(colorHex.slice(2,4))
    colorArr.push(colorHex.slice(4))
    let colorLine = colorArr.map(item => parseInt(item, 16)).reduce((prev, cur) => prev + cur)
    console.log('colorLine', colorLine)
    let res = ((colorLine / 3) > (255 / 2)) ? '#121212' : '#EDEDED'
    return res
  }

  return (
    <div>
      <button onClick={()=>downloadCardImage()} className={styles.downloadBtn} style={{margin: '10px', display: 'block'}}>download the card image</button>
      <div className={styles.cardDiv} id='mythCard'>
        {
            colorPallete(7).map(item => 
                <div key={item} className={styles.colorPaper} style={{background: item}}>
                    <div style={{ color: getTextColor(item) }} className={styles.colorEn}>{colorMap[item]}</div>
                    <div style={{ color: getTextColor(item) }} className={styles.colorHex}>{parseHex(item)}</div>
                </div>
            )
        }
      </div>
    </div>
  );
};

export default Jupiter;
