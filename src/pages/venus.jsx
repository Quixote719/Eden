import React, { createContext, useContext, useReducer } from 'react';

const VenusContext = createContext({ count: 0 });
const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      console.log('state', state);
      return { count: state.count + 1 };
    case 'decrement':
      console.log('state', state);
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Counter = () => {
  const { state, dispatch } = useContext(VenusContext);
  return (
    <div>
      <div>{state.count}</div>
      <div onClick={() => dispatch({ type: 'decrement' })}>-</div>
      <div onClick={() => dispatch({ type: 'increment' })}>+</div>
    </div>
  );
};

const Venus = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <VenusContext.Provider value={{ state, dispatch }}>
      <Counter />
    </VenusContext.Provider>
  );
};

export default Venus;
