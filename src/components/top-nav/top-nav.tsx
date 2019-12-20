import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import './top-nav.scss';

interface ITopNavProps {
    categories: string[];
}

interface ITopNavState {

}

export default class TopNav extends Component<ITopNavProps, ITopNavState> {
    render() {
        return (
            <Nav variant="pills">
                {this.props.categories.map(category => {
                    return <Nav.Item key={category}>
                        <Nav.Link href={`/${category}`}>{category}</Nav.Link>
                    </Nav.Item>
                })}
            </Nav>
        );
    }
}
