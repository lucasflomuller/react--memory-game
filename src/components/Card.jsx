import React, { Component } from 'react';
import "../styles/Card.css";

class Card extends Component {
  render() { 
    return (
      <div className="card-container">
        <div className="card-overlay">
        </div>
        <div className="card-bg">
        </div>
      </div>
    );
  }
}
 
export default Card;