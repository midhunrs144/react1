import React, { Component } from 'react';
import axios from 'axios';
import './App.css';



import Login from './Login.js';
import Home from './Home.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
