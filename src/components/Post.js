import React from 'react';

import {
    Card,
    Modal,
    Button
} from 'react-bootstrap';

export default class Post extends React.Component {
    constructor() {
        super();
        this.state = {
            displayModal: false,
            imageSrc: null
        }
    }

    componentDidMount() {
        const path = '/post/image?' + new URLSearchParams({
            id: this.props.image
        });

        fetch(path)
            .then(res => res.json())
            .then(json => {
                this.setState({ imageSrc: json.imageSrc });
            });
    }

    // TODO the modal needs to be shown on the parent component, the CreationGrid. HOW?!?!?!
    render() {
        return (
            <div>
                <Card key={this.props.id} className="post">
                    <Card.Img variant="top" src={this.state.imageSrc} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Button variant="primary" onClick={() => this.setState({ displayModal: true })}>View</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{this.props.user}</small>
                    </Card.Footer>
                </Card>
                {this.state.displayModal &&
                    <Modal show={false} backdrop="static" onHide={() => this.setState({ displayModal: false })}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.props.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={this.state.imageSrc} alt=""></img>
                            <p>{this.props.user}</p>
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