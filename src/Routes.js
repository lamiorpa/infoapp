import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./Homepage";
import Lightsout from "./lights-out/Lightsout";
import Weather from "./weather/Weather";

import NotFound from './NotFound';

/**
 * Component for choosing the rendered content
 */
class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <Homepage />} />
                <Route exact path="/lights-out" render={() => <Lightsout />} />
                <Route exact path="/weather" render={() => <Weather />} />
                <Route render={() => <NotFound />} />
            </Switch>
        );
    }
}

export default Routes;
