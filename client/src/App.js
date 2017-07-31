import React, { Component } from 'react';

import './App.css';
import Nav from './components/commons/Nav';
import TopBox from './components/index/TopBox'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <TopBox />
      </div>
    );
  }
}

export default App;
