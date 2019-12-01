import React from 'react';
import Nav from 'react-bootstrap/Nav';
import classes from './action-bar.scss';

interface IActionBarProps {
    colorToggle?: boolean
}

export default function ActionBar({ }: IActionBarProps): React.ReactElement {
    return (
        <Nav className="nav justify-content-end">
            <Nav.Item key={Math.random()}>
                <label className={classes.switch}>
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                </label>
            </Nav.Item>
        </Nav>
    )
}
