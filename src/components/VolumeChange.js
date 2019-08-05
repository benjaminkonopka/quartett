import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { changeVolumeToAction } from '../redux/actions';

class VolumeChange extends PureComponent {
  changeVolume() {
    const { changeVolumeTo } = this.props;
    const newVolume = Math.round(Math.random() * 100);
    changeVolumeTo({ volume: newVolume });
  }

  render() {
    const { volume } = this.props;
    return (
      <div>
        <h3>current volume: {volume}</h3>

        <button type="button" onClick={this.changeVolume}>
          Change Volume
        </button>
      </div>
    );
  }
}

// PropTypes for this Component
VolumeChange.propTypes = {
  volume: PropTypes.number.isRequired,
  changeVolumeTo: PropTypes.func.isRequired,
};

// Map Redux State To Props
const mapStateToProps = state => {
  return { volume: state.gameSettings.volume };
};

// Map Redux Actions To Props
const mapDispatchToProps = {
  changeVolumeTo: changeVolumeToAction,
};

// Connect Props and Dispatch to Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VolumeChange);
