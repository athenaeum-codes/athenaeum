
import React, { PureComponent } from 'react';
import MenuItem from './menu-item';

interface Props {
    collections: string[]
}

// Replace the key here with object id from database.
// Easy way to have the key be unique and traceable
export default class Menu extends PureComponent<Props> {
    render() {
        return (
            this.props.collections.map((value, idx) => (
                <div>
                    <MenuItem title={value} key={idx + value}/>
                </div>
            ))
        )
    }
}
