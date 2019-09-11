import React, { Component } from 'react';

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="Dogs">
                <div>Dog not found!</div>
            </div>
        );
    }
}

export default NotFound;