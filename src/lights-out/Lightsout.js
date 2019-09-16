import React, { Component } from "react";
import Board from "./Board";

/** Simple app that just shows the LightsOut game. */
class Lightsout extends Component {

    // Conditional state assign: https://www.freecodecamp.org/forum/t/conditional-setstate/242667/3
    constructor(props) {
        super(props);

        this.state = {
            boardNumber: sessionStorage.getItem("boardNumber") || 0
        };

        this.incrBoardNmbr = this.incrBoardNmbr.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    componentWillUnmount() {
        console.log("Lightsout-component unmounting...")
    }

    // static defaultProps = {
    //     renderableBoards: [
    //         <Board nrows={3} ncols={3} key="hard" incrBoardNmbr={this.incrBoardNmbr} />,
    //         <Board nrows={4} ncols={4} key="coded" incrBoardNmbr={this.incrBoardNmbr} />,
    //         <Board nrows={5} ncols={5} key="keys" incrBoardNmbr={this.incrBoardNmbr} />
    //     ]
    // }

    /**
     * Increases board number to display next game board and saves that board's number to sessionStorage in setstate callback
     */
    incrBoardNmbr() {
        this.setState(state => ({
            boardNumber: Number(state.boardNumber) + 1
        }), () => {
            sessionStorage.setItem("boardNumber", this.state.boardNumber)
        })
    }
    resetGame() {
        this.setState({
            boardNumber: 0
        }, () => {
            sessionStorage.setItem("boardNumber", 0)
            console.log("storage resetoinnin jälkeen: " + sessionStorage.getItem("boardNumber"))
        })
    }

    /**
     * Renders the currently wanted board, selection made based on index position of board in array
     */
    render() {
        let renderableBoards = [
            <Board nrows={3} ncols={3} key="hard" incrBoardNmbr={this.incrBoardNmbr} resetGame={this.resetGame} />,
            <Board nrows={4} ncols={4} key="coded" incrBoardNmbr={this.incrBoardNmbr} resetGame={this.resetGame} />,
            <Board nrows={5} ncols={5} key="keys" incrBoardNmbr={this.incrBoardNmbr} resetGame={this.resetGame} />
        ]
        console.log("state: " + this.state.boardNumber)
        console.log("sessionstorage: " + sessionStorage.getItem("boardNumber"))
        return (
            <div className='Lightsout'>
                {this.state.boardNumber < renderableBoards.length ?
                    renderableBoards[this.state.boardNumber]
                    :
                    <React.Fragment>
                        <h1>Games won, good job!</h1>
                        <button onClick={this.resetGame}>Reset game</button>
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default Lightsout;

// old map
// {this.props.renderableBoards.map((item, i) => {
//     if (i === this.state.renderedBoard) {
//         return item
//     }
//     else return null
// })}

// lightsout
