import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Creation extends React.Component {
    constructor() {
        super();
        this.state = {
            image: ""
        }
    }
    componentDidMount() {
        fetch('/image?id=' + this.props.id)
            .then(res => res.blob)
            .then(blob => URL.createObjectURL(blob))
            .then(image => this.setState({ image: image }))
    }

    render() {
        return (
            <Card key={this.props.id} className="creation-card">
                <Card.Img variant="top" src={this.state.image} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>Posted by: {this.props.user}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    };
}