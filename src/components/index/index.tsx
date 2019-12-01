import React, { PureComponent } from 'react'
import Menu, { MenuItem } from '../menu'
import Bookcase from '../bookcase'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ActionBar from '../action-bar';

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

    componentDidMount() {

    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col sm={2}>
                        <Menu collections={this.state.collections}></Menu>
                    </Col>
                    <Col sm={10}>
                        <ActionBar colorToggle key={1} />
                        <Bookcase key={2}></Bookcase>
                    </Col>
                </Row>
            </Container>
        );
    }
}
