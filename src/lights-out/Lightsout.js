import React, { Component } from "react";
import Board from "./Board";

/** Simple app that just shows the LightsOut game. */

class Lightsout extends Component {

    // Conditional state assign: https://www.freecodecamp.org/forum/t/conditional-setstate/242667/3
    constructor(props) {
        super(props);

        this.state = {
            renderedBoard: 0
        };
        this.incrBoardNmbr = this.incrBoardNmbr.bind(this);
    }

    incrBoardNmbr() {
        this.setState(state => ({
            renderedBoard: state.renderedBoard + 1
        }))
        // TODO: make the app remember lastly played board using sessionstorage
    }

    /**
     * Renders the currently wanted board, selection made based on index position of board in array
     */
    render() {
        let renderableBoards = [
            <Board nrows={3} ncols={3} key="hard" incrBoardNmbr={this.incrBoardNmbr} />,
            <Board nrows={4} ncols={4} key="coded" incrBoardNmbr={this.incrBoardNmbr} />,
            <Board nrows={5} ncols={5} key="keys" incrBoardNmbr={this.incrBoardNmbr} />
        ]
        console.log("state: " + this.state.renderedBoard)
        console.log("sessionstorage: " + sessionStorage.getItem("boardNumber"))
        return (
            <div className='Lightsout'>
                {renderableBoards[this.state.renderedBoard]}
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
