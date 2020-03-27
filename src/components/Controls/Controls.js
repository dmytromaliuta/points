import React from 'react';
import LevelSelect from "../LevelSelect/LevelSelect"
import './Controls.css';

class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.renderField = this.renderField.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.gameStart = this.gameStart.bind(this);
        this.state = {
            playerName: ''
        }
    }
    render(props) {
        return (
            <div className="controls">
                <LevelSelect renderField={this.renderField} gamesetting={this.props.gamesetting} />
                <div className="inputname">
                    <input type="text" placeholder="Enter your name" onChange={this.handleChange} />
                </div>
                <div className="play-btn" onClick={this.gameStart}>
                    <a href="#">
                        Play
                    </a>
                </div>
            </div>
        );
    }
    gameStart() {
        this.props.gameStart(this.state.playerName);
    }
    handleChange(event) {
        this.setState({playerName: event.target.value});
    }
    renderField(name) {
        this.props.renderField(name);
    }
}

export default Controls;

