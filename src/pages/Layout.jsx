import React from 'react';

import {
    Container,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';

import Header from '../components/Header';
import WelcomeMessage from '../components/WelcomeMessage';
import Footer from '../components/Footer';
import PostGrid from '../components/PostGrid';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header title={this.props.title} />
                <WelcomeMessage />
                <Container className="justif">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Container>
                <PostGrid />
                <Footer />
            </div >
        );
    }
}