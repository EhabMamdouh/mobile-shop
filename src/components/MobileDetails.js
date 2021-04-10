import React, { useContext } from 'react';
import { MobileContext } from '../contexts/MobileContext';

const MobileDetails = ({ mobile }) => {
  const { dispatch } = useContext(MobileContext);
  return (
    <tr onClick={() => dispatch({ type: 'REMOVE_MOBILE', id: mobile.id })}>
    <td>{mobile.brand}</td>
    <td>{mobile.model}</td>
    <td>{mobile.year}</td>
    <td>{mobile.memory}</td>
    <td>{mobile.screen}</td>
    <td>{mobile.color}</td>
    <td>{mobile.options}</td>
  </tr>
  );
}

export default MobileDetails;