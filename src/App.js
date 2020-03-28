import React from 'react';
import './App.css';
import Game from './components/Game/Game';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.getLeader = this.getLeader.bind(this);
    this.state = {
      gamesetting: [],
      winners: []
    }
  }
  componentDidMount() {
    axios.get(`https://starnavi-frontend-test-task.herokuapp.com/game-settings`)
      .then(res => {
        const gamesetting = res.data;
        this.setState({
          gamesetting
        })
      });
  }
  getLeader() {
    axios.get(`https://starnavi-frontend-test-task.herokuapp.com/winners`)
      .then(res => {
        const winners = res.data.reverse().splice(0, 10);
        winners.map((item) => {
            let dateMilisec = Date.parse(item.date);
            let newDate = new Date(dateMilisec);
            let year = newDate.getFullYear() % 100;
            if (year < 10) year = '0' + year;
            let month = newDate.getMonth() + 1;
            if (month < 10) month = '0' + month;
            let day = newDate.getDate();
            if (day < 10) day = '0' + day;
            let hours = newDate.getHours();
            if (hours < 10) hours = '0' + hours;
            let minutes = newDate.getMinutes();
            if (minutes < 10) minutes = '0' + minutes;
            item.date = hours + ':' + minutes + ' ' + day + '.' + month + '.' + year;
        })
        this.setState({
            winners
        })
    });
  }
  render(){
    return (
      <div className="app">
        <Game getLeader={this.getLeader} gamesetting={this.state.gamesetting} />
        <LeaderBoard getLeader={this.getLeader} winners={this.state.winners} />
      </div>
    );
  }
}

export default App;
