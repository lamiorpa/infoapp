import React, { Component } from 'react';

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="NotFound">
                <div>Target page not found!</div>
            </div>
        );
    }
}

export default NotFound;