import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Toggle from '../toggle';
import Actions from '../actions';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

interface IActionBarProps {
    colorToggle?: boolean
}

export default function ActionBar(props: IActionBarProps): React.ReactElement {
    //Bad key, I know...
    return (
        <Nav className="nav justify-content-end">
            <Nav.Item key={Math.random()}>
                <Container fluid>
                    <Row>
                        <Actions>
                            <Actions.NewItem></Actions.NewItem>
                        </Actions>
                        <Toggle></Toggle>
                    </Row>
                </Container>
            </Nav.Item>
        </Nav>
    )
}
