import React from 'react';

const Form = (props) => {

    return (
        <form onSubmit={props.loadWeather} className="WeatherForm">
            <input id="input_city" type="text" name="city" placeholder="City..." />
            <input id="input_country" type="text" name="country" placeholder="Country..." />
            <button>Get Weather</button>
        </form>
    )
}

//form

export default Form;