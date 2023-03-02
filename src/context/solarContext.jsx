import React, { createContext } from 'react';

const solarContext = createContext({});
const { Provider } = solarContext;

export function SolarContextProvider(props) {
  return <Provider value={{ name: 'solar system' }}>{props.children}</Provider>;
}

export default solarContext;
