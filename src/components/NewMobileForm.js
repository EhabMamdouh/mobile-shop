import {Link, useHistory  } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { MobileContext } from '../contexts/MobileContext';


const NewMobileForm = () => {
  const { dispatch } = useContext(MobileContext);
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [brand, setBrand] = useState('Nokia');
  const [memory, setMemory] = useState('16GB');
  const [screen, setScreen] = useState('');
  const [color, setColor] = useState('');
  const [options, setOptions] = useState('');

  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_MOBILE', mobile: { model, year,brand,memory,screen,color,options }});
    setModel('');
    setYear('');
    setBrand('');
    setMemory('');
    setScreen('');
    setColor('');
    setOptions('');
    history.push('/');
  }

  return (
    <div className="container">
    <div className="card">
  <div className="card-header">
    Add Mobile
  </div>
  <div className="card-body">
  <form onSubmit={handleSubmit}>
        <div class="container">
        <div class="row">
          <div className="col-md-6">
                <div className="form-group">
              <input type="text" placeholder="model" value={model}
                    onChange={(e) => setModel(e.target.value)} required className="form-control"/>
              </div>
              <div className="form-group">
              <input type="number" placeholder="year" value={year}
                    onChange={(e) => setYear(e.target.value)} required className="form-control" />
              </div>
            
              <div className="form-group">
                <label> Brand </label>
                <select value={brand} onChange={(e) => setBrand(e.target.value)} class="form-control">
                        <option value="Nokia">Nokia</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Apple">Apple</option>
                        <option value="Sony">Sony</option>
                        <option value="LG">LG</option>
                </select>
                </div>
              <div className="form-group">
              <label> Memory </label>
              <select value={memory} onChange={(e) => setMemory(e.target.value)} class="form-control">
              <option value="16GB">16GB</option>
              <option value="32GB">32GB</option>
              <option value="64GB">64GB</option>
              <option value="128GB">128GB</option>
              </select>
              </div>
          </div>
          <div className="col-md-6">
        <div className="row card-header">
         <div className="col-md-3">
              <div value="options" onChange={(e) => setOptions(e.target.value)}>
              <div><label>Options</label></div>
              <div><input type="checkbox" value="Duall SIM" name="options" required/> Duall SIM </div>
              <div><input type="checkbox" value="NFC" name="options"/> NFC </div>
              <div><input type="checkbox" value="4G" name="options"/> 4G </div>
              </div>
              </div>
         <div className="col-md-3">
              <div value="screen" onChange={(e) => setScreen(e.target.value)}>
              <div><label class="form-check-label">Screen</label></div>
              <div><input type="radio" value="4" name="screen" required /> 4 </div>
              <div><input type="radio" value="5" name="screen" required /> 5 </div>
              <div><input type="radio" value="6" name="screen" required /> 6 </div>
              </div>
         </div> 
         <div className="col-md-3">     
            <div value="color" onChange={(e) => setColor(e.target.value)} >
            <div><label>Color</label></div>
            <div><input type="radio" value="white" name="color" required/> white</div>
            <div><input type="radio" value="black" name="color" required/> black</div>
            <div><input type="radio" value="gold" name="color" required/> gold</div>
            </div>
         </div>  
        </div>
          </div>
        </div>
        </div>

        <div class="container">
        <div class="row">
        <div class="col-md-7"></div>
        <div class="col-md-2">
        <Link to="/" type="button" className="btn btn-secondary">Back</Link>
        </div>
        <div class="col-md-2">
        <input type="submit" value="Save" className="btn btn-success" />
        </div>
        </div>
        </div>
      
    </form>
  </div>
  </div>
    </div>
  );
}

export default NewMobileForm;