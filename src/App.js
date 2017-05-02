import React, { Component } from 'react';
import './App.css';
import { Grocery } from './Grocery'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Grocery name='bananas' starred={false}/>
      </div>
    );
  }
}

export default App;
