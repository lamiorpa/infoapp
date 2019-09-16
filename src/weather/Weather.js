import React, { Component } from "react";

import Form from './Form';
import Titles from './Titles';
import WeatherConditions from './WeatherConditions';

import "./Weather.css";
import apiconfig from '../apiconfig';

// example api call: http://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid={apiconfig.WEATHER_API_KEY}
// inspiration: https://medium.com/@peterekeneeze/build-a-react-js-weather-app-with-stateless-functional-components-e61567004b54

/** Simple app that fetches weather information from OpenWeatherMap API and displays it */
class Weather extends Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        windspeed: undefined,
        description: undefined,
        error: undefined,
    }

    /**
     * Load the existing weather forecast, ignored if not done already
     */
    componentDidMount() {

        let response = JSON.parse(sessionStorage.getItem("weatherData"))

        if (response) {
            this.setState({
                temperature: response.main.temp || "Not available",
                city: response.name || "Not available",
                country: response.sys.country || "Not available",
                humidity: response.main.humidity || "Not available",
                windspeed: response.wind.speed || "Not available",
                description: response.weather[0].description || "Not available",
                error: ""
            })
        }
    }

    getWeather = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        if (city && country) {

            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lang=fi&q=${city},${country}&units=metric&appid=${apiconfig.WEATHER_API_KEY}`)
            const response = await api_call.json();

            if (response.cod === 200) { // response code of delivery OK
                this.setState({
                    temperature: response.main.temp || "Not available",
                    city: response.name || "Not available",
                    country: response.sys.country || "Not available",
                    humidity: response.main.humidity || "Not available",
                    windspeed: response.wind.speed || "Not available",
                    description: response.weather[0].description || "Not available",
                    error: ""
                }, () => {
                    sessionStorage.setItem("weatherData", JSON.stringify(response))
                }
                )
            } else {
                this.setState({
                    error: "Searched city or country not found"
                })
            }
        } else {
            this.setState({
                error: "Please enter the values"
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>This is a weather page</h1>
                <div className='Weather'>
                    <Titles />
                    <Form loadWeather={this.getWeather} />
                    <WeatherConditions
                        temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        windspeed={this.state.windspeed}
                        error={this.state.error} />
                </div>
            </React.Fragment>
        );
    }
}

// weather

export default Weather;
