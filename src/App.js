import React from 'react';
import './App.css';
import ShowCards from './components/ShowChars';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app-container">
      <Router>



        <Navbar/> 
        {/* <ShowCards/> */}

        <Switch>
          <Route path='/'>
            <ShowCards/>
          </Route>
        </Switch>
      </Router>
     
    </div>
  
  );
}

export default App;
