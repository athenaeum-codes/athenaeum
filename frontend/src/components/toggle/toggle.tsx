import React, { Component } from 'react';
import './toggle.scss';

interface IToggleProps {
    on?: boolean;
}
interface IToggleState {
    on: boolean;
}

export default class Toggle extends Component<IToggleProps, IToggleState> {
    constructor(props: IToggleProps) {
        super(props);
        this.state = {
            on: props.on ? props.on : false
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(): void {
        this.setState({ on: !this.state.on });
    }

    render() {
        let on = this.state.on;

        //GOOD
        return (
            <div>
                <button className={(on ? "on" : "off") + " toggle"} onClick={this.onClick}>
                    <div className={"circle " + (on ? "on" : "off")}></div>
                </button>
                {this.props.children}
            </div>
        );

        //BAD
        // return (
        //     on ?
        //         <div className="on">
        //             On
        //             {this.props.children}
        //         </div>
        //         :
        //         <div className="off">
        //             Off
        //             {this.props.children}
        //         </div>
        //     )
        // );
    }
}
