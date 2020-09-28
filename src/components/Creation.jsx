import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Creation extends React.Component {
    constructor() {
        super();
        this.state = {
            image: null
        }
    }

    componentDidMount() {
        const path = '/image?' + new URLSearchParams({
            id: this.props.id
        });

        console.log('fetching image: ' + path)

        fetch(path)
            .then(res => {
                const blobData = res.blob();
                console.log('received blob: ' + blobData);
                return blobData;
            })
            .then(blob => {
                const objUrl = URL.createObjectURL(blob);
                console.log('created obj url');
                return objUrl;
            })
            .then(image => {
                this.setState({ image: image })
                console.log('set state.image: ' + image);
            });
    }

    render() {
        return (
            <Card key={this.props.id} className="creation-card">
                <Card.Img variant="top" src={this.state.image} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>Posted by: {this.props.user}</Card.Text>
                    <Button variant="primary">Open</Button>
                </Card.Body>
            </Card>
        );
    };
}