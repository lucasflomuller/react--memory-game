import React, { Component } from 'react';
import Card from "./Card.jsx";
import "../styles/MemoryGame.css";

class MemoryGame extends Component {
  render() { 
    return (
      <div className="container">
        <h3>This is the MEMORYGAME</h3>
        <Card />
      </div>
    );
  }
}
 
export default MemoryGame;