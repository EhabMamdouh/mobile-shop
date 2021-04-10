import React from 'react'
import BarChart from './BarChart';
import DontChart from './DontChart';
import MobileList from './MobileList';

const Home = () => {
    return (
        <div className="row">
        <div className="col-md-6 card">
        <br></br>
        <MobileList />
        </div>
        <div className="col-md-6">
        <div className="col-md-12 card">
        <br></br>
        <BarChart/>
        </div>
        <div className="col-md-12 card">
        <DontChart /> 
        </div>
        </div>
        </div>
    )
}

export default Home
