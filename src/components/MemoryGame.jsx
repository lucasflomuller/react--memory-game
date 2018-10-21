import React, { Component } from 'react';
import Card from "./Card.jsx";
import "../styles/MemoryGame.css";

class MemoryGame extends Component {
  render() { 
    return (
      <div className="game-container" id="game">
        {this.props.cards.map((card, i) => <Card color={card.color} key={i} />)}
      </div>
    );
  }
}
 
export default MemoryGame;