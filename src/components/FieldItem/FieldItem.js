import React from 'react';
import './FieldItem.css';

class FieldItem extends React.Component {
    render(props) {
        let style;
        if (this.props.fieldarray[this.props.index] == 1) {
            style = {background: '#42d8e8', border: '1px solid #42d8e8'}
        } else if (this.props.fieldarray[this.props.index] == 2) {
            style = {background: '#00e871', border: '1px solid #00e871'}
        } else if (this.props.fieldarray[this.props.index] == 3) {
            style = {background: '#e85a5f', border: '1px solid #e85a5f'}
        }
        return (
            <div className="fieldItem" style={style}>
                {this.props.index}
            </div>
        );
    }
}

export default FieldItem;