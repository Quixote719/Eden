import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { themeInitState, themeReducer } from '@/reducers/compReducer';
import PropTypes from 'prop-types';

const AppContext = createContext(null);

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, themeInitState);
  // 把创建函数和依赖数组项作为参数传入 useMemo，它仅仅会在数组依赖项中的值改变时才会重新计算值
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

AppContextProvider.propTypes = {
  children: PropTypes.object
};
