import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Card from './Card';

import './Cards.scss';

class Cards extends PureComponent {
  render() {
    const { cards } = this.props;
    return (
      <div className="cards">
        {cards.map(card => (
          <div>
            <Card key={card.id} card={card} />
          </div>
        ))}
      </div>
    );
  }
}

// PropTypes for this Component
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

// Map Redux State To Props
const mapStateToProps = state => {
  return {
    cards: state.cards,
  };
};

// Map Redux Actions To Props
const mapDispatchToProps = {};

// Connect Props and Dispatch to Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
