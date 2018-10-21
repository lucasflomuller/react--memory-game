import React, { Component } from 'react';
import "../styles/Card.css";

class Card extends Component {

  render() {
    const display = this.props.isShow === false ? "#ccc" : "transparent";
    return (
      <div id={this.props.id} style={{backgroundColor: this.props.color}} className="card-container" onClick={(e) => this.props.handleCardClick(e)}>
        <div style={{backgroundColor: display}} className="card-overlay"></div>
      </div>
    );
  }
}
 
export default Card;