import React from 'react';

import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class Creation extends React.Component {
    constructor() {
        super();
        this.state = {
            displayModal: false,
            image: null
        }
    }

    componentDidMount() {
        const path = '/creation/image?' + new URLSearchParams({
            id: this.props.id
        });

        fetch(path)
            .then(res => res.blob())
            .then(blob => URL.createObjectURL(blob))
            .then(image => this.setState({ image: image }));
    }

    // TODO the modal needs to be shown on the parent component, the CreationGrid. HOW?!?!?!
    render() {
        return (
            <div>
                <Card key={this.props.id} className="creation-card">
                    <Card.Img variant="top" src={this.state.image} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>Posted by: {this.props.user}</Card.Text>
                        <Button variant="primary" onClick={() => this.setState({ displayModal: true })}>View</Button>
                    </Card.Body>
                </Card>
                {this.state.displayModal &&
                    <Modal show="false" backdrop="static" onHide={() => this.setState({ displayModal: false })}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.props.name}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <img src={this.state.image} alt=""></img>
                            <p>Posted by: {this.props.user}</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.setState({ displayModal: false })}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                }
            </div>
        )
    }
}