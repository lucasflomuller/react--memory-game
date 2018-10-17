import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import MemoryGame from './MemoryGame.jsx';
import "../styles/App.css";

class App extends Component {
  state = {  }
  render() { 
    return ([
      <h1>Hello World</h1>,
      <Navbar />,
      <MemoryGame />,
    ]);
  }
}

export default App;
