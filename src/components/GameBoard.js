import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
// import { someAction } from '../redux/actions';

class GameBoard extends PureComponent {
  render() {
    const { gameState, currentRound, currentPlayers, players } = this.props;
    const getPlayerById = id => {
      return players.filter(player => player.id === id)[0];
    };
    return (
      <div>
        {gameState === 'ACTIVE' ? (
          <React.Fragment>
            <div>
              <span>CurrentRound: {currentRound}</span>
            </div>
            <div>
              <ul>
                {/* Move to own component with icons etc. Separate Player1 from other Players */}
                {Object.keys(currentPlayers).map(playerKey => {
                  const playerId = currentPlayers[playerKey];
                  if (playerId === '') return '';
                  return (
                    <li key={playerId}>
                      {playerKey}: {getPlayerById(playerId).name}
                    </li>
                  );
                })}
              </ul>
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
  currentRound: PropTypes.number.isRequired,
  currentPlayers: PropTypes.shape().isRequired,
  players: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

// Map Redux State To Props
const mapStateToProps = state => {
  return {
    gameState: state.game.gameState,
    currentRound: state.game.currentRound,
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
