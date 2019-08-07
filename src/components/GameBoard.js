import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Card from './Card';
// import { someAction } from '../redux/actions';

import './GameBoard.scss';

class GameBoard extends PureComponent {
  render() {
    const { gameState, currentPlayers, players } = this.props;
    const getPlayerById = id => {
      return players.filter(player => player.id === id)[0];
    };
    return (
      <div className="gameboard">
        {gameState === 'ACTIVE' ? (
          <React.Fragment>
            {/* <!-- PLAYERS --> */}
            <div className="gameboard__cards">
              {/* TODO Move to own component with icons etc. 
                  Separate Player1 from other Players */}
              {Object.keys(currentPlayers)
                .sort()
                .map(playerKey => {
                  const playerId = currentPlayers[playerKey].id;
                  const currentCard = currentPlayers[playerKey].deck[0];
                  return (
                    <div key={playerId}>
                      {/* PLAYER NAME */}
                      <div>
                        {playerKey}: {getPlayerById(playerId).name} - Karten{' '}
                        {currentPlayers[playerKey].deck.length}
                      </div>
                      {/* PLAYER CARD */}
                      <div>
                        {/* TODO IF THERE IS NO CARD DON'T SHOW HIM */}
                        <Card card={currentCard} playerId={playerId} />
                      </div>
                    </div>
                  );
                })}
              {/* --- */}
            </div>
          </React.Fragment>
        ) : (
          'Currently no game active'
        )}
      </div>
    );
  }
}

// PropTypes for this Component
GameBoard.propTypes = {
  gameState: PropTypes.string.isRequired,
  currentPlayers: PropTypes.shape().isRequired,
  players: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

// Map Redux State To Props
const mapStateToProps = state => {
  return {
    gameState: state.game.gameState,
    currentPlayers: state.game.currentPlayers,
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
)(GameBoard);
