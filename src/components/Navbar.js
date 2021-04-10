import {Link} from 'react-router-dom';
import React, { useContext } from 'react';
import { MobileContext } from '../contexts/MobileContext';

const Navbar = () => {
  const { mobiles } = useContext(MobileContext);
  return (
    <div className="container">
    <br></br>
    <div className="row">
    <div className="col-md-6">
    <h1>Mobile Shop Application</h1>
    <p>Currently you have <strong className="btn btn-success">{mobiles.length}</strong> Mobile</p>
    </div>
    <div className="col-md-6">
    <Link to="/addMobile" type="button" className="btn btn-primary">Add New Mobile</Link>
    </div>
    </div>
    </div>
  );
}
 
export default Navbar;