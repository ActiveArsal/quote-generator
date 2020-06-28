import React, { Component } from 'react';
import Leaves from './Components/Leaves/Leaves';
import Space from './Components/Space/Space';
import Main from './Components/Main/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Leaves /> */}
        <Space />
        <Main />
      </div>
    );
  }
}

export default App;