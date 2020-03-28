import React from 'react';
import './Game.css';
import Controls from '../Controls/Controls';
import GameField from '../GameField/GameField'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.gamePlay = this.gamePlay.bind(this)
        this.renderField = this.renderField.bind(this);
        this.gameStart = this.gameStart.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            gameSettingSelect: {
                field: 5,
                delay: 2000
            },
            fieldarray: new Array(25).fill(0),
            message: '',
            playerName: '',
            index: 0,
            btnname: 'Play',
            gameStart: false,
            playerScore: 0,
            computerScore: 0
        }
    }
    render(props) {
        return (
            <div className="game-wrap">
                <Controls renderField={this.renderField}
                          gamesetting={this.props.gamesetting}
                          gameStart={this.gameStart}
                          handleChange={this.handleChange}
                          btnname={this.state.btnname} />
                <div className="winner">
                    {this.state.message}
                </div>
                <GameField fieldarray={this.state.fieldarray} gameSettingSelect={this.state.gameSettingSelect} handleClick={this.handleClick} />
            </div>
        );
    }
    renderField(name) {
        let length = this.props.gamesetting[name].field || 5;
        this.setState({
            gameStart: false,
            message: '',
            btnname: 'Play',
            gameSettingSelect: this.props.gamesetting[name],
            fieldarray: new Array(length*length).fill(0),
        });
    }
    handleChange(name){
        this.setState({
            playerName: name
        })
    }
    handleClick(index){
        console.log("ads");
        if(!this.state.gameStart) return;
        if(this.state.fieldarray[this.state.results[this.state.index]] === 2 || this.state.fieldarray[this.state.results[this.state.index]] === 3) return;
        let arr = this.state.fieldarray;
        if(this.state.fieldarray[index] === 0) {
            arr[index] = 3;
            let results = this.state.results; 
            results.splice(results.indexOf(index), 1);
            arr[this.state.results[this.state.index]] = 1;
            this.setState({
                fieldarray: arr,
                computerScore: this.state.computerScore + 1
            });
        } else if (this.state.fieldarray[index] === 1){
            arr[index] = 2;
            this.setState({
                fieldarray: arr
            });
        }
        
    }
    gamePlay(){
        let limit = this.state.gameSettingSelect.field;
        limit = Math.round(limit*limit/2) - 1;
        console.log(limit)
        if(this.state.playerScore > limit){
            console.log("plater")
            this.setState({
                message: this.state.playerName + " won",
                btnname: 'Play again',
                gameStart: false
            })
            return
        }
        if(this.state.computerScore > limit){
            console.log("pc")
            this.setState({
                message: "Computer Ai won",
                btnname: 'Play again',
                gameStart: false
            })
            return
        }
        let arr = this.state.fieldarray;
        arr[this.state.results[this.state.index]] = 1;
        this.setState({
            fieldarray: arr
        })
        setTimeout(() => {
            if(!this.state.gameStart) return;
            if(arr[this.state.results[this.state.index]] === 1) {
                arr[this.state.results[this.state.index]] = 3;
                this.setState({
                    fieldarray: arr,
                    index: this.state.index + 1,
                    computerScore: this.state.computerScore + 1
                })
                this.gamePlay();
            } 
            if(arr[this.state.results[this.state.index]] === 2) {
                this.setState({
                    index: this.state.index + 1,
                    playerScore: this.state.playerScore + 1
                })
                this.gamePlay();
            } 
        }, this.state.gameSettingSelect.delay);
    }
    gameStart(){
        if(this.state.btnname === 'Play again' && this.state.gameStart === false) {
            this.setState({
                fieldarray: new Array(25).fill(0),
                message: '',
                index: 0,
                gameStart: true,
                playerScore: 0,
                computerScore: 0
            })
        }
        if(!this.state.playerName.length) {
            this.setState({
                message: 'Please write your name'
            });
            return;
        }
        //Набір випадкових чисел
        let i, arr = [], results = [];
        for (i = 0; i <= this.state.fieldarray.length - 1; i++ ) arr.push(i);
        for (i = 0; i < this.state.fieldarray.length; i++) results.push(arr.splice(Math.floor(Math.random() * (arr.length)), 1)[0]);
        this.setState({
            message: '',
            gameStart: true,
            results
        });
        setTimeout(() => {
            this.gamePlay();
        }, this.state.gameSettingSelect.delay);
    }  
}

export default Game;