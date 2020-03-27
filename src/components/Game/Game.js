import React from 'react';
import './Game.css';
import Controls from '../Controls/Controls';
import GameField from '../GameField/GameField'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.fieldChange = this.fieldChange.bind(this)
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
            timerBeforeGame: false,
            gameStart: false,
            clicked: false
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
        if(!this.state.gameStart) return;
        let arr = this.state.fieldarray;
        if(this.state.timerBeforeGame) {
            if(index === this.state.results[this.state.index] && !this.state.isTimerWas) {
                arr[index] = 2;
                this.setState({
                    fieldarray: arr,
                    clicked: true
                });
                console.log("next green")
            } else if(index === this.state.results[this.state.index] && this.state.isTimerWas) {
                
                return
            } else {
                arr[index] = 3;
                this.setState({
                    fieldarray: arr
                })
            }
        } else {
            return
        }
        
    }
    fieldChange(){
        let arr = this.state.fieldarray;
        arr[this.state.results[this.state.index]] = 1;
        this.setState({
            fieldarray: arr,
            index: this.state.index++,
            timerBeforeGame: true
        })
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
            gameStart: true,
            results
        });
        setTimeout(() => {
            this.fieldChange()
            this.setState({
                timerBeforeGame: true
            })
            setTimeout(() => {
                if(this.state.fieldarray[this.state.results[this.state.index]] === 1) {
                    let arr = this.state.fieldarray;
                    arr[this.state.results[this.state.index]] = 3;
                    this.setState({
                        fieldarray: arr
                    })
                    console.log("next red")
                }
                this.setState({
                    isTimerWas: true
                })
            }, this.state.gameSettingSelect.delay)
        }, this.state.gameSettingSelect.delay);
    }  
}

export default Game;