import React, { useContext } from 'react';
import planetContext from '../context/planetContext';

const Mars = props => {
  const contextProps = useContext(planetContext);
  return (
    <div>
      <div>Mars</div>
      <div>{contextProps.age}</div>
    </div>
  );
};

export default Mars;
