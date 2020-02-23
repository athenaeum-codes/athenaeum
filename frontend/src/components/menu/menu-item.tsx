
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    title: string,
    subTitle?: string
}

export default class MenuItem extends PureComponent<Props> {
    render() {
        return (
            <div>
                <Link to={this.props.title}><h1> {this.props.title} </h1></Link>
                <small> {this.props.subTitle} </small>
            </div>
        )
    }
}
