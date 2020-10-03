import React from 'react';

import {
    Jumbotron,
    Container
} from 'react-bootstrap';

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
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>{this.state.message}</h1>
                        <p>We're happy to have you. Enjoy :)</p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}