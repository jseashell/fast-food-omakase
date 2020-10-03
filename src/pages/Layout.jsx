import React from 'react';

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
                <PostGrid />
                <Footer />
            </div >
        );
    }
}