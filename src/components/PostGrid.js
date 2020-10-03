import React from 'react';

import {
    Container,
    CardDeck
} from 'react-bootstrap';

import Post from './Post';

export default class PostGrid extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('/post/all')
            .then(res => res.json())
            .then(data => this.setState({ posts: data }));
    }

    render() {
        return (
            <Container>
                <CardDeck>
                    {this.state.posts.length > 0 && this.state.posts.map((post, index) => (
                        <Post key={post.objectId} id={post.id} name={post.name} image={post.image} user={post.user} />
                    ))}
                </CardDeck>
            </Container>
        )
    }
}