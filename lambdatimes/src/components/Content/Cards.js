import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

class Cards extends React.Component {
  state = {};
  render() {
    return (
      <div className="cards-container">
        {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
        {this.props.cards.map(cardObject => (
          <>
            <Card cardObject={cardObject} />
          </>
        ))}
      </div>
    );
  }
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};
export default Cards;
