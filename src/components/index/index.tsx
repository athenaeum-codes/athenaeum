import React, { PureComponent } from 'react'
import Menu from '../menu'
import Bookcase from '../bookcase'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ActionBar from '../action-bar';

import { BrowserRouter as Router } from 'react-router-dom';

interface IGlobalProps {

}

interface IGlobalState {
    collections: string[]
}

export default class Index extends PureComponent<IGlobalProps, IGlobalState> {

    constructor(props: IGlobalProps) {
        super(props);

        this.state = { collections: ['Books', 'Movies'] };
    }

    render() {
        return (
            <Router>
                <Container fluid>
                    <Row>
                        <Col sm={2}>
                            <Menu key="Menu" collections={this.state.collections}></Menu>
                        </Col>
                        <Col sm={10}>
                            <ActionBar colorToggle key={1} />
                            <Bookcase key={2} collection={3}></Bookcase>
                        </Col>
                    </Row>
                </Container>
            </Router>
        );
    }
}
