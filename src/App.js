import React from 'react';
import './App.css';
import Game from './components/Game/Game';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gamesetting: []
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
  render(){
    return (
      <div className="app">
        <Game gamesetting={this.state.gamesetting} />
        <LeaderBoard />
      </div>
    );
  }
}

export default App;
