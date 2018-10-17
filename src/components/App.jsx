import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import MemoryGame from './MemoryGame.jsx';
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (
      <div className="container">
        <h1>Hello World</h1>
        <Navbar />
        <MemoryGame />
      </div>
    );
  }
}

export default App;
