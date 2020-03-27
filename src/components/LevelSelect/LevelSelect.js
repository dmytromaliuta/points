import React from 'react';
import './LevelSelect.css';

class LevelSelect extends React.Component {
    constructor(props) {
        super(props);
        this.renderField = this.renderField.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isOpen: false,
            modeName: 'Pick game mode'
        }
    }
    render() {
        const gamemodename = Object.keys(this.props.gamesetting).map((name, i) => 
            <li key={i} onClick={() => this.renderField(name)}>{name}</li>
        );
        return (
            <div className="select">
                <div className="select-btn" onClick={this.handleClick}>
                    <span>{this.state.modeName}</span>
                    <i className={this.state.isOpen ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}></i>
                </div>
                <div className="select-block" style={this.state.isOpen ? {display: "flex"} : {display: "none"}}>
                    <ul>
                        {gamemodename}
                    </ul>
                </div>
            </div>
        );
    }
    handleClick(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    renderField(name) {
        this.props.renderField(name);
        this.setState({
            isOpen: false,
            modeName: name
        });
    }
}

export default LevelSelect;
