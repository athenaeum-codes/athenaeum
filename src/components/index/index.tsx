import React, { PureComponent } from 'react'
import Menu from '../menu'
import Bookcase from '../bookcase'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


interface Props {

}

export default class Index extends PureComponent<Props> {

    componentDidMount() {

    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col sm={2}>
                        <Menu></Menu>
                    </Col>
                    <Col sm={10}>
                        <Bookcase></Bookcase>
                    </Col>
                </Row>
            </Container>
        );
    }
}
