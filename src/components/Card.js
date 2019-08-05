import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

class Card extends PureComponent {
  render() {
    const { card } = this.props;
    const values = card.values.sort((a, b) => (a.seqId > b.seqId ? 1 : -1));
    return (
      <div className="card">
        <h3>{card.title}</h3>
        <div>
          <img src={card.image} alt={card.title} />
        </div>
        <ul>
          {values.map(value => (
            <li type="button" key={value.seqId}>
              <span>{value.title}</span>: <span>{value.value}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// PropTypes for this Component
Card.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    values: PropTypes.array,
  }).isRequired,
};

export default Card;
