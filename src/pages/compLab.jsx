import React, { useReducer } from 'react';
import { CommentOutlined } from '@ant-design/icons';
import { Button, FloatButton, DatePicker } from 'antd';
import { counterReducer, colorReducer } from '@/reducers/compReducer';
import { useAppContext } from '@/store/appContext';

const { RangePicker } = DatePicker;

const initColor = param => {
  return { color: param };
};

const CompLab = () => {
  const [counterState, counterDispatch] = useReducer(counterReducer, { count: 0 });
  const [colorState, colorDispatch] = useReducer(colorReducer, 'green', initColor);
  const cxt = useAppContext();

  const changeNum = param => {
    counterDispatch({ type: param === 'increase' ? 'increment' : 'decrement' });
  };

  const changeTheme = () => {
    let color = cxt?.state?.theme === 'blue' ? 'cyan' : 'blue';
    cxt.dispatch({ type: 'changeTheme', val: color });
  };

  const genColor = () => {
    const colors = ['red', 'green', 'blue'];
    let res = Math.floor(Math.random() * 3);
    colorDispatch({ type: colors[res] });
  };

  return (
    <div style={{ color: cxt?.state?.theme }}>
      <Button onClick={() => changeNum('increase')}>increase</Button>
      <Button onClick={() => changeNum('decrease')}>decrease</Button>
      <Button onClick={() => genColor()}>color change</Button>
      <Button onClick={() => changeTheme()}>change theme</Button>
      <div>{counterState.count}</div>
      <div>{colorState.color}</div>
      <FloatButton icon={<CommentOutlined />}></FloatButton>
      <div>
        <RangePicker showTime />
      </div>
    </div>
  );
};

export default CompLab;
