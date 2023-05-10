import React from 'react';
import MainComp from './components/MainComp.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainComp />
      </BrowserRouter>
    </div>
  );
}

export default App;