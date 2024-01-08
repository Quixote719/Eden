import { useRef, useEffect } from 'react';

const useMount = () => {
  const mountRef = useRef(false);
  useEffect(() => {
    mountRef.current = true;
    return () => {
      mountRef.current = false;
    };
  }, []);
  console.log('useMount', mountRef.current);
  return () => mountRef.current;
};

export { useMount };
