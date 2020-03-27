import React from 'react';
import './LeaderBoard.css';
import LeaderInfo from '../LeaderInfo/LeaderInfo'

class LeaderBoard extends React.Component {
    render() {
        return (
            <div className="leader-board">
                <div className="board-wrap">
                    <h4>LeaderBoard</h4>
                    <LeaderInfo />
                    <LeaderInfo />
                    <LeaderInfo />
                    <LeaderInfo />
                </div>    
            </div>
        );
    }
}

export default LeaderBoard;
