import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Lightsout from "./Lightsout";

import NotFound from './NotFound';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <h1>Root directory</h1>} />
                <Route exact path="/lights-out" render={() => <Lightsout />} />
                <Route render={() => <NotFound />} />
            </Switch>
        );
    }
}

export default Routes;
