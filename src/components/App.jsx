import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import MemoryGame from './MemoryGame.jsx';
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);



    this.state = {
      numCards: 20,
      colors: new Set(),
      cards: []
    }
  }

  generateHexColor = () => {
    // Generate number from min to max in hex
    const rand = Math.floor(Math.random() * 16777215)
                    .toString(16).padStart(6, "0");
    return `#${rand}`;
  }

  generateColorSet = () => {
    const colors = new Set(this.state.colors);
    while (colors.size < this.state.numCards) {
      let color = this.generateHexColor();
      colors.add(color);
    }
    this.setState({ colors });
    return colors;
  }

  render() { 
    return (
      <div className="container">
        <Navbar />
        <div className="game-menu">
          <a 
            href="#game"
            className="btn btn-start"
            onClick={this.generateColorSet}
          >
            Start Game
          </a>
        </div>
        <MemoryGame cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
