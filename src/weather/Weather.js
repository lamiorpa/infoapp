import React, { Component } from "react";

import Form from './Form';
import Titles from './Titles';
import WeatherConditions from './WeatherConditions';

/** Simple app that fetches weather information from OpenWeatherMap API and displays it */

// example api call: http://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=b5feaab89a9d1e1a3ac94913272343b6
// inspiration: https://medium.com/@peterekeneeze/build-a-react-js-weather-app-with-stateless-functional-components-e61567004b54
class Weather extends Component {

    render() {
        return (
            <div className='Weather'>
                <h1>This is a weather page</h1>
                <Titles />
                <Form />
                <WeatherConditions />
            </div>
        );
    }
}

export default Weather;
