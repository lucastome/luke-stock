import React from 'react';
import Button from '../button';
import Header from '../Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title='LukeStock'/>
      <div className = "Container">
        <Button onClick = {() => window.alert('click')}>
          Click
        </Button>
      </div>
    </div>
  );
}

export default App;
