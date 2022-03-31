import React from 'react';
import About from './components/About';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import "./app.css";

function App() {
  return (
    <div className='App'>
      <Topbar/>
      <div className='mainContainer'>
        <Sidebar/>
        <Home/>
        
      </div>
    </div>
  );
}

export default App;
