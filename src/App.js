import React from 'react';
import About from './components/About';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import User from './pages/User/User';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Topbar/>
      <div className='mainContainer'>
        <Sidebar/>
        <Routes>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/users">
            <User/>
          </Route>

        </Routes >
        
        
      </div>
    </Router>
  );
}

export default App;
