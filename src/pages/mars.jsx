import React, { useEffect, useRef } from 'react';
import styles from './index.module.less';

const Mars = () => {
  const registerRef = useRef(false);

  useEffect(() => {
    if (!registerRef.current) {
      window.onresize = () => {
        console.log('resize');
      };
      document.getElementById('Mars').onmouseover = () => {
        console.log('aoproching Mars');
      };
      document.getElementById('Mars').onclick = () => {
        console.log('land on Mars');
      };
      registerRef.current = true;
      // onclick（单击） ondblclick(双击) oncontextmenu(右键菜单)
      // onmouseover(移入)onmouseout(移出)
      // onmouseenter(移入)onmouseleave(移出)
      // onmousedown(按下)onmouseup(抬起) onmousemove(移动)
    }
  }, []);

  return <div id="Mars">Mars</div>;
};

export default Mars;
