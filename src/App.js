import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import MobileContextProvider from './contexts/MobileContext';
import NewMobileForm from './components/NewMobileForm';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <MobileContextProvider>
      <div className="container">
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/addMomile" component={NewMobileForm} />
        <NewMobileForm />
        </Switch>
        <br></br>
      </div>
      </MobileContextProvider>
    </div>
    </Router>
  );
}

export default App;
