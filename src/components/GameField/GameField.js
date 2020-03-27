import React from 'react';
import './GameField.css';
import FieldItem from '../FieldItem/FieldItem';

class GameField extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            
        }
    }
    render(props) {
        let calculateWidth = this.props.gameSettingSelect.field * 40 + 'px';
        return (
            <div className="game-field">
                <div className="square clearfix" style={{width: calculateWidth}}>
                    {this.props.fieldarray.map((item, i) =>
                        <FieldItem key={i} index={i} fieldarray={this.props.fieldarray} handleClick={this.handleClick} />
                    )}
                </div>
            </div>
        );
    }
    handleClick(index){
        this.props.handleClick(index);
    }
}

export default GameField;