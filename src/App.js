import React, { Component } from 'react';
import './App.css';
import Game from './javascript/components/Game/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
