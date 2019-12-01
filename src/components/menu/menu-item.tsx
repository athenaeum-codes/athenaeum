
import React, { PureComponent } from 'react';

interface Props {
    title: string,
    subTitle?: string
}

export default class MenuItem extends PureComponent<Props> {
    render() {
        return (
            <div>
                <h1> {this.props.title} </h1>
                <small> {this.props.subTitle} </small>
            </div>
        )
    }
}
