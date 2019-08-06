import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  setGameStateActiveAction,
  setGameStateInactiveAction,
} from '../redux/actions';

class MainMenu extends PureComponent {
  render() {
    const { setGameStateActive, setGameStateInactive, gameState } = this.props;

    const startButton =
      gameState === 'ACTIVE' ? (
        <button type="button" onClick={setGameStateInactive}>
          Stop Game (currenty {gameState})
        </button>
      ) : (
        <button type="button" onClick={setGameStateActive}>
          Start Game (currenty {gameState})
        </button>
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
