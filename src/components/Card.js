import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import './Card.scss';
import { selectCardValueAction } from '../redux/actions';

class Card extends PureComponent {
  selectCard(seqId) {
    const { selectCardValue } = this.props;
    selectCardValue({ seqId });
  }

  render() {
    const { card } = this.props;
    const values = card.values.sort((a, b) => (a.seqId > b.seqId ? 1 : -1));
    return (
      <div className="card">
        <h3>{card.title}</h3>
        <div>
          <img src={card.image} alt={card.title} />
        </div>
        {values.map(value => (
          <div key={value.seqId}>
            <button type="button" onClick={() => this.selectCard(value.seqId)}>
              <span>{value.title}</span>: <span>{value.value}</span>
            </button>
          </div>
        ))}
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
  selectCardValue: PropTypes.func.isRequired,
};

// Map Redux State To Props
const mapStateToProps = () => {
  return {};
};

// Map Redux Actions To Props
const mapDispatchToProps = {
  selectCardValue: selectCardValueAction,
};

// Connect Props and Dispatch to Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
