import React, { Component } from 'react';
import "../styles/Card.css";

class Card extends Component {
  render() { 
    return (
      <div className="card-container">
        <div className="card-overlay">
        </div>
        <div style={{backgroundColor: this.props.color}} className="card-bg">
        </div>
      </div>
    );
  }
}
 
export default Card;