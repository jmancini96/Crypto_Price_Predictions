import logo from './logo.svg';
import './App.css';
import React from 'react';
import About from './components/About';

function App() {
  return (
    // <div       
    //   style={{
    //   backgroundColor: 'blue',
    //   width: '2150px',
    //   height: '1050px'
    // }}/>>
    <div
    style={{
      backgroundColor: 'lightblue',
      width: '2150px',
      height: '1050px'
    }}
    
    >
      <main>
        <About></About>
      </main>
    </div>
    
  );
}

export default App;
