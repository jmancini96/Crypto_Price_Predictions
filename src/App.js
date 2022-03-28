import React from 'react';
import About from './components/About';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import "./app.css";

function App() {
  return (
    <div className='App'>
      <Topbar/>
      <div className='mainContainer'>
        <Sidebar/>
        <div className='others'>
          test pages
        </div>
        
      </div>
    </div>
  );
}

export default App;
