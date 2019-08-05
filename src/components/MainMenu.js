import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { startGameAction, stopGameAction } from '../redux/actions';

class MainMenu extends PureComponent {
  render() {
    const { startGame, stopGame, gameState } = this.props;

    const startButton =
      gameState === 'ACTIVE' ? (
        <button type="button" onClick={stopGame}>
          Stop Game (currenty {gameState})
        </button>
      ) : (
        <button type="button" onClick={startGame}>
          Start Game (currenty {gameState})
        </button>
      );

    return <div>{startButton}</div>;
  }
}

// PropTypes for this Component
MainMenu.propTypes = {
  startGame: PropTypes.func.isRequired,
  stopGame: PropTypes.func.isRequired,
  gameState: PropTypes.string.isRequired,
};

// Map Redux State To Props
const mapStateToProps = state => {
  return { gameState: state.game.gameState };
};

// Map Redux Actions To Props
const mapDispatchToProps = {
  startGame: startGameAction,
  stopGame: stopGameAction,
};

// Connect Props and Dispatch to Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);
