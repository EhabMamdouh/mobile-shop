import React, { createContext, useReducer, useEffect } from 'react';
import { mobileReducer } from '../reducers/mobileReducer';

export const MobileContext = createContext();

const MobileContextProvider = (props) => {
  const [mobiles, dispatch] = useReducer(mobileReducer, [], () => {
    const localData = localStorage.getItem('mobiles');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('mobiles', JSON.stringify(mobiles));
  }, [mobiles]);
  return (
    <MobileContext.Provider value={{ mobiles, dispatch }}>
      {props.children}
    </MobileContext.Provider>
  );
}
 
export default MobileContextProvider;