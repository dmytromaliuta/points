import React from 'react';
import './LeaderInfo.css';

class LeaderInfo extends React.Component {
    render() {
        return (
            <div className="leader-info clearfix">
                <div className="name">
                    {this.props.name}
                </div>
                <div className="time">
                    {this.props.time}
                </div>
            </div>
        );
    }
}

export default LeaderInfo;
