import React, { Component } from "react";
import Routes from './Routes';
import NavBarFancy from './NavBarFancy';
import "./App.css";

/** Simple app that renders few interesting components */

class App extends Component {
    static defaultProps = {
        dogs: [
            {
                name: "Whiskey",
                age: 5,
                src: "whiskey",
                facts: [
                    "Whiskey loves eating popcorn.",
                    "Whiskey is a terrible guard dog.",
                    "Whiskey wants to cuddle with you!"
                ]
            },
            {
                name: "Hazel",
                age: 3,
                src: "hazel",
                facts: [
                    "Hazel has soooo much energy!",
                    "Hazel is highly intelligent.",
                    "Hazel loves people more than dogs."
                ]
            },
            {
                name: "Tubby",
                age: 4,
                src: "tubby",
                facts: [
                    "Tubby is not the brightest dog",
                    "Tubby does not like walks or exercise.",
                    "Tubby loves eating food."
                ]
            },
            {
                name: "Azil",
                age: 240,
                src: "hazel",
                facts: [
                    "Hazel has soooo much energy!",
                    "Hazel is highly intelligent.",
                    "Hazel is posessed by the devil!"
                ]
            },
        ]
    }
    render() {
        return (
            <div className='App'>
                <NavBarFancy dogs={App.defaultProps.dogs} />
                <Routes />
            </div>
        );
    }
}

export default App;
