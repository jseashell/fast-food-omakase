import React from 'react';

import Header from '../components/Header';
import WelcomeMessage from '../components/WelcomeMessage';
import Footer from '../components/Footer';

import CreationGrid from '../components/CreationGrid';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header title={this.props.title} />
                <WelcomeMessage />
                <CreationGrid />
                <Footer />
            </div >
        );
    }
}