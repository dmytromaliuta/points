import React from 'react';
import './FieldItem.css';

class FieldItem extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render(props) {
        let style;
        if (this.props.fieldarray[this.props.index] === 1) {
            style = {background: '#42d8e8', border: '1px solid #42d8e8'}
        } else if (this.props.fieldarray[this.props.index] === 2) {
            style = {background: '#00e871', border: '1px solid #00e871'}
        } else if (this.props.fieldarray[this.props.index] === 3) {
            style = {background: '#e85a5f', border: '1px solid #e85a5f'}
        }
        return (
            <div className="fieldItem" style={style} onClick={this.handleClick}>
                {this.props.index}
            </div>
        );
    }
    handleClick(){
        this.props.handleClick(this.props.index);
    }
    
}

export default FieldItem;