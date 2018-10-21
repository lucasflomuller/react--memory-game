import React, { Component } from 'react';
import Card from "./Card.jsx";
import "../styles/MemoryGame.css";

class MemoryGame extends Component {
  render() { 
    return (
      <div className="container" id="game">
        <h3>This is the MEMORYGAME</h3>
        {this.props.cards.map((card, i) => <Card key={i} />)}
      </div>
    );
  }
}
 
export default MemoryGame;