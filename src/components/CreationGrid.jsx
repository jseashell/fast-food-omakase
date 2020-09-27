import React from 'react';

import Container from 'react-bootstrap/Container';
import Creation from '../components/Creation';

export default class CreationGrid extends React.Component {
    constructor() {
        super();
        this.state = {
            creations: []
        }
    }

    componentDidMount() {
        fetch('/creations/all')
            .then(res => res.json())
            .then(data => this.setState({ creations: data }));
    }

    render() {
        return (
            <Container className="creation-container">
                <div className="creation-grid">
                    {this.state.creations.length > 0 && this.state.creations.map((creation) => (
                        <Creation key={creation.id} id={creation.id} name={creation.name} imageSrc={creation.imageSrc} user={creation.user} />
                    ))}
                </div>
            </Container>
        )
    }
}