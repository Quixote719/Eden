import React, { useEffect, useState, useRef } from 'react';
import { useMount } from '@/utils/customHooks';
import styles from './index.module.less';

const Mars = () => {
  const registerRef = useRef(false);
  const [dustStatus, setDustStatus] = useState(true);
  const [counter, setCounter] = useState(0);

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

  return (
    <div>
      <div id="Mars">Mars</div>
      {dustStatus && <Dust />}
      <button onClick={() => setDustStatus(false)}>clean</button>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>add</button>
    </div>
  );
};

const Dust = () => {
  const getMountStatus = useMount();

  useEffect(() => {
    console.log('dust1', getMountStatus());
    return () => {
      console.log('dust2', getMountStatus());
    };
  });

  return <div>dust</div>;
};

export default Mars;
