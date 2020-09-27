import React from 'react';

export default class WelcomeMessage extends React.Component {
    constructor() {
        super();
        this.state = {
            message: ""
        }
    }
    componentDidMount() {
        fetch('/api')
            .then(res => res.text())
            .then(data => this.setState({ message: data }));
    }

    render() {
        return (
            <p>{this.state.message}</p>
        );
    }
}