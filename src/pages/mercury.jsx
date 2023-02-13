import React, { useState, useCallback, useMemo } from 'react';

const Mercury = () => {
  const [count, setCount] = useState(0);

  const ucb = useCallback(() => {
    console.log(count);
  }, [count]);

  const ucb1 = useCallback(() => {
    setCount(count + 1);
  }, []);

  const ucb2 = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const memoDiv = useMemo(() => {
    return count + 'KB';
  }, [count]);

  return (
    <div>
      <div>Mercury</div>
      <button onClick={ucb}>callbackClick</button>
      <button onClick={ucb1}>add1</button>
      <button onClick={ucb2}>Add1</button>
      <div>{memoDiv}</div>
    </div>
  );
};

export default Mercury;
