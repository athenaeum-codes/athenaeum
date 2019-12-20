import React, { Component } from 'react';
    import './newItemAction.scss';
    
    interface INewItemActionProps {
        
    }
    interface INewItemActionState {
        
    }
    
    export default class NewItemAction extends Component<INewItemActionProps, INewItemActionState> {
        state = {}
    
        render() {
            return (
                <div>
                    <button>Press me!</button>
                </div>
            )
        }
    }
    