import React, { Component } from "react";
import Routes from './Routes';
import NavBarFancy from './NavBarFancy';
import "./App.css";

/** Simple app that renders few interesting components */

class App extends Component {

    render() {
        return (
            <div className='App'>
                <NavBarFancy />
                <Routes />
            </div>
        );
    }
}

export default App;
