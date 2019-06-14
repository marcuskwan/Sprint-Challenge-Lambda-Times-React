import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="headline">{this.props.cardObject.headline}</div>
        <div className="author">
          <div className="img-container">
            <img src={this.props.cardObject.img} />
          </div>
          <span>By {this.props.cardObject.author}</span>
        </div>
      </div>
    );
  }
}

// Make sure to include PropTypes.
Card.propTypes = {
  cardObject: PropTypes.shape({
    headline: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
};

export default Card;
