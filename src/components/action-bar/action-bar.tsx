import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Toggle from '../toggle';

interface IActionBarProps {
    colorToggle?: boolean
}

export default function ActionBar({ }: IActionBarProps): React.ReactElement {
    //Bad, I know...
    return (
        <Nav className="nav justify-content-end">
            <Nav.Item key={Math.random()}>
                <Toggle></Toggle>
            </Nav.Item>
        </Nav>
    )
}
