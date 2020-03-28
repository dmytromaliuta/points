import React from 'react';
import './LeaderBoard.css';
import LeaderInfo from '../LeaderInfo/LeaderInfo'

class LeaderBoard extends React.Component {
    componentDidMount() {
        this.props.getLeader()
    }
    render() {
        let winners = this.props.winners;
        return (
            <div className="leader-board">
                <div className="board-wrap">
                    <h4>Leader board</h4>
                    {winners.map((item, i) => 
                        <LeaderInfo key={i} name={item.winner} time={item.date} />
                    )}
                </div>    
            </div>
        );
    }
}

export default LeaderBoard;
