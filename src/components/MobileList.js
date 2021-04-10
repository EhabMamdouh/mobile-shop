import React, { useContext, useState } from 'react';
import MobileDetails from './MobileDetails';
import { MobileContext } from '../contexts/MobileContext';

const MobileList = () => {
  const { mobiles } = useContext(MobileContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
      setSearchTerm(event.target.value);
    };
  
    const results = !searchTerm
      ? mobiles
      : mobiles.filter(mobile =>
        mobile.model.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
  return results.length ? (
    <div className="form-group">
    <label> Search </label>
     <input
        className="form-control"
        type="text"
        placeholder="Search by Model"
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="form-group">
          <label> Brand </label>
          <select className="form-control">
                  <option value="Nokia">Nokia</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Apple">Apple</option>
                  <option value="Sony">Sony</option>
                  <option value="LG">LG</option>
          </select>
          </div>
      <table className="table table-hover" >
          <tr>
          <th scope="col">Brand</th>
          <th scope="col">Model</th>
          <th scope="col">Year</th>  
          <th scope="col">Memory</th>
          <th scope="col">Screen</th>
          <th scope="col">Color</th>
          <th scope="col">Options</th>
          </tr>
        {results.map(mobile => {
          return ( <MobileDetails mobile={mobile} key={mobile.id} /> );
        })}
      </table>
    </div>
  ) : (
    <div className="form-group">
    <label> Search </label>
    <input
       className="form-control"
       type="text"
       placeholder="Search by Model"
       value={searchTerm}
       onChange={handleChange}
     />
     <div>
          <label> Brand </label>
          <select className="form-control">
                  <option value="Nokia">Nokia</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Apple">Apple</option>
                  <option value="Sony">Sony</option>
                  <option value="LG">LG</option>
          </select>
          </div>
     <table className="table table-hover">
         <tr>
         <th scope="col">Brand</th>
         <th scope="col">Model</th>
         <th scope="col">Year</th>  
         <th scope="col">Memory</th>
         <th scope="col">Screen</th>
         <th scope="col">Color</th>
         <th scope="col">Options</th>
         </tr>
         <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>No Data</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
  </tbody>
     </table>
   </div>
  );
}

export default MobileList;