import React from 'react';

import {
    Navbar,
    Nav
} from 'react-bootstrap';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <Navbar fixed="bottom" className="justify-content-end" bg="light" expand="lg">
                    <Nav.Item>Copyright 2020</Nav.Item>
                </Navbar>
            </div>
        )
    }
}