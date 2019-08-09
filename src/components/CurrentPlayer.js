import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Card';
import './CurrentPlayer.scss';

class CurrentPlayer extends PureComponent {
  getPlayerById(id) {
    const { players } = this.props;
    return players.filter(player => player.id === id)[0];
  }

  render() {
    const { currentPlayer, playerKey } = this.props;
    const playerId = currentPlayer.id;
    const currentCard = currentPlayer.deck[0];
    const player = this.getPlayerById(playerId);

    return (
      <div className="currentPlayer">
        {/* PLAYER NAME */}
        <div>
          {playerKey}: {player.name} - Karten {currentPlayer.deck.length}
        </div>
        {/* PLAYER CARD */}
        <React.Fragment>
          {/* TODO IF THERE IS NO CARD DON'T SHOW HIM */}
          {typeof currentCard !== 'undefined' ? (
            <Card card={currentCard} playerId={playerId} />
          ) : (
            <div className="currentPlayer__gameOver">gameOver</div>
          )}
        </React.Fragment>
      </div>
    );
  }
}

// PropTypes for this Component
CurrentPlayer.propTypes = {
  currentPlayer: PropTypes.shape().isRequired,
  playerKey: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

// Map Redux State To Props
const mapStateToProps = state => {
  return {
    players: state.players,
  };
};

// Map Redux Actions To Props
const mapDispatchToProps = {
  // action: someAction,
};

// Connect Props and Dispatch to Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentPlayer);
