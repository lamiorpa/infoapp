import React from 'react';

const Weather = (props) => {
    return (
        <div>
            {props.country && props.city && <p>Location: {props.city}, {props.country}</p>}
            {props.temperature && <p>Temperature: {props.temperature} C</p>}
            {props.humidity && <p>Humidity: {props.humidity}%</p>}
            {props.windspeed && <p>Wind speed:  {props.windspeed} m/s</p>}
            {props.description && <p>Conditions:  {props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    )
}

// weatherconditions

export default Weather;