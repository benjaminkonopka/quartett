import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
// import { someAction } from '../redux/actions';

class Card extends PureComponent {
  render() {
    const { card } = this.props;
    const values = card.values.sort((a, b) => (a.seqId > b.seqId ? 1 : -1));
    return (
      <div>
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

// Map Redux State To Props
const mapStateToProps = state => {
  return {
    card: state.cards[0],
  };
};

// Map Redux Actions To Props
const mapDispatchToProps = {};

// Connect Props and Dispatch to Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
