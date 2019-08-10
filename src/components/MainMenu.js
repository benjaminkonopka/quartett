import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  setGameStateActiveAction,
  setGameStateInactiveAction,
} from '../redux/actions';

class MainMenu extends PureComponent {
  startGameWithPlayers(playerCount) {
    const { setGameStateActive } = this.props;
    setGameStateActive({ playerCount });
  }

  render() {
    const { setGameStateInactive, gameState } = this.props;

    const startButton =
      gameState === 'ACTIVE' ? (
        <button type="button" onClick={setGameStateInactive}>
          Stop Game
        </button>
      ) : (
        <div>
          Start Game
          <button type="button" onClick={() => this.startGameWithPlayers(2)}>
            2 Players
          </button>
          <button type="button" onClick={() => this.startGameWithPlayers(3)}>
            3 Players
          </button>
          <button type="button" onClick={() => this.startGameWithPlayers(4)}>
            4 Players
          </button>
        </div>
      );

    return <div>{startButton}</div>;
  }
}

// PropTypes for this Component
MainMenu.propTypes = {
  setGameStateActive: PropTypes.func.isRequired,
  setGameStateInactive: PropTypes.func.isRequired,
  gameState: PropTypes.string.isRequired,
};

// Map Redux State To Props
const mapStateToProps = state => {
  return { gameState: state.game.gameState };
};

// Map Redux Actions To Props
const mapDispatchToProps = {
  setGameStateActive: setGameStateActiveAction,
  setGameStateInactive: setGameStateInactiveAction,
};

// Connect Props and Dispatch to Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);
