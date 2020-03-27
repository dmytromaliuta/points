import React from 'react';
import './Game.css';
import Controls from '../Controls/Controls';
import GameField from '../GameField/GameField'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.renderField = this.renderField.bind(this);
        this.gameStart = this.gameStart.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            gameSettingSelect: {
                field: 5,
                delay: 2000
            },
            fieldarray: new Array(25).fill(0),
            message: '',
            index: 0,
            isTimerWas: false,
            timerBeforeGame: false
        }
    }
    render(props) {
        return (
            <div className="game-wrap">
                <Controls renderField={this.renderField}
                          gamesetting={this.props.gamesetting}
                          gameStart={this.gameStart} />
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
            gameSettingSelect: this.props.gamesetting[name],
            fieldarray: new Array(length*length).fill(0)
        });
    }
    handleClick(index){
        let arr = this.state.fieldarray;
        if(this.state.timerBeforeGame) {
            if(this.state.isTimerWas) {
                arr[this.state.results[this.state.index]] = 3;
            }
            if(index === this.state.results[this.state.index]) {
                arr[index] = 2;
                this.setState({
                    fieldarray: arr
                })
            } else {
                
                arr[index] = 3;
                this.setState({
                    fieldarray: arr
                })
            }
        } else {
            arr[index] = 3;
            this.setState({
                fieldarray: arr
            })
            return
        }
        // if(this.state.timerBeforeGame) {
        //     let arr = this.state.fieldarray;
        //     arr[index] = 3;
        //     this.setState({
        //         fieldarray: arr
        //     })
        // } else {
        //     let arr = this.state.fieldarray;
        //     arr[index] = 3;
        //     this.setState({
        //         fieldarray: arr
        //     })
        // }
    }
    fieldChange(){
        
    }
    gameStart(name){
        if(!name.length) {
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
            results
        });
        setTimeout(() => {
            let arr = this.state.fieldarray;
            arr[this.state.results[this.state.index]] = 1;
            this.setState({
                fieldarray: arr,
                index: this.state.index++,
                timerBeforeGame: true
            })
            setTimeout(() => {
                this.setState({
                    isTimerWas: true
                })
            }, this.state.gameSettingSelect.delay)
        }, this.state.gameSettingSelect.delay);
    }  
}

export default Game;