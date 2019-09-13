import React from 'react';
import './App.css';
import Characters from './components/Characters';

const App = () => {
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className='card-container'>
        <Characters/>  
      </div>
    </div>
  );
}

export default App;
