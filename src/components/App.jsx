import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import MemoryGame from "./MemoryGame.jsx";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numCards: 20,
      colors: new Set(),
      cards: []
    };
  }

  generateHexColor = () => {
    // Generate number from min to max in hex
    const rand = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
    return `#${rand}`;
  };

  generateColorSet = () => {
    // Copiyng set
    const colors = new Set();
    // Generating colors and adding, using a while to prevent repetitive colors
    while (colors.size < this.state.numCards) {
      let color = this.generateHexColor();
      colors.add(color);
    }
    this.setState({ colors });
    return colors;
  };

  generateCards = () => {
    this.generateColorSet();
    let cards = [...this.state.colors].map((color, index) => {
      return {
        color,
        index,
        isShow: false
      };
    });
    cards = this.shuffleArray([...cards, ...cards]);
    this.setState({ cards });
  };

  // https://bit.ly/2gMXijX <- picked from this stack question
  shuffleArray = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="game-menu">
          <button className="btn btn-start" onClick={this.generateCards}>
            Start Game
          </button>
        </div>
        <MemoryGame cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
