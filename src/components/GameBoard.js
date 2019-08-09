import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
// import { someAction } from '../redux/actions';

import './GameBoard.scss';
import CurrentPlayer from './CurrentPlayer';

class GameBoard extends PureComponent {
  render() {
    const { gameState, currentPlayers } = this.props;
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
                .map(playerKey => (
                  <CurrentPlayer
                    key={playerKey}
                    playerKey={playerKey}
                    currentPlayer={currentPlayers[playerKey]}
                  />
                ))}
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
