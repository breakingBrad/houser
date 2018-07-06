import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Wizard />
      </div>
    )
  }
}

export default App;
