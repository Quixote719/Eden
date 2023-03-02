import React, { createContext } from 'react';

const planetContext = createContext({});
const { Provider } = planetContext;
export function PlanetContextProvider(props) {
  return <Provider value={{ age: 700000000 }}>{props.children}</Provider>;
}

export default planetContext;
