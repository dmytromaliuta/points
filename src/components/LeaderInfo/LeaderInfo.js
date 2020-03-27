import React from 'react';
import './LeaderInfo.css';

class LeaderInfo extends React.Component {
    render() {
        return (
            <div className="leader-info clearfix">
                <div className="name">
                    User Name
                </div>
                <div className="time">
                    Date and Time
                </div>
            </div>
        );
    }
}

export default LeaderInfo;
