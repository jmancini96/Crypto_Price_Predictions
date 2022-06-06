import React from 'react';
import ReactDOM from 'react-dom';
import express from 'express';
import App from './App';

// App.use(express.static(__dirname));

// App.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


