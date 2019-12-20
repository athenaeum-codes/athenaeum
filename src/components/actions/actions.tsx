import React, { Component } from 'react';
import './actions.scss';
import NewItemAction from './new-item-action';

interface IActionsProps {

}
interface IActionsState {

}

export default class Actions extends Component<IActionsProps, IActionsState> {
    state = {}
    static NewItem: typeof NewItemAction;

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

Actions.NewItem = NewItemAction;
