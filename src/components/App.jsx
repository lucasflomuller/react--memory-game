import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import MemoryGame from "./MemoryGame.jsx";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numCards: 4,
      colors: new Set(),
      cards: [],
      curColor: ""
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
    let cards = [...this.state.colors].map(color => {
      return {
        color,
        isShow: false
      };
    });
    cards = this.shuffleArray([...cards, ...cards]);
    cards = cards.map(card => Object.assign({}, card));
    this.setState({ cards });
    this.setState({ curColor: "" });
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

  // https://bit.ly/2NPsaKV
  rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }

  handleCardClick = e => {
    const curColor = this.state.curColor;
    const cards = [...this.state.cards].map(card => Object.assign({}, card));
    const clickedCard = cards[Number(e.target.parentNode.id)];
    // Showing card clicked
    clickedCard.isShow = !clickedCard.isShow;
    this.setState({ cards });
    if (curColor === "") {
      this.setState({ curColor: clickedCard.color });
    } else {
      setTimeout(() => {
        if (clickedCard.color === curColor) {
          this.setState({ curColor: "" });
        } else {
          cards
            .filter(
              card =>
                card.color === curColor || card.color === clickedCard.color
            )
            .forEach(function(card) {
              card.isShow = false;
            });
          this.setState({ cards });
          this.setState({ curColor: "" });
        }
      }, 500);
    }
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
        <MemoryGame
          handleCardClick={this.handleCardClick}
          cards={this.state.cards}
        />
      </div>
    );
  }
}

export default App;
