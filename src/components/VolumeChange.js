import React, { Component } from 'react'
import { connect } from "react-redux"
import { changeVolumeTo } from "../redux/actions"


class VolumeChange extends Component {
    changeVolume = () => {
        const newVolume = Math.round(Math.random() * 100);
        this.props.changeVolumeTo({ volume: newVolume });
    }
    render() {
        return (
            <div>
                <h3>
                    current volume: {this.props.volume}
                </h3>

                <button onClick={this.changeVolume}>Change Volume</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { volume: state.gameSettings.volume };
}

export default connect(
    mapStateToProps,
    { changeVolumeTo }
)(VolumeChange);