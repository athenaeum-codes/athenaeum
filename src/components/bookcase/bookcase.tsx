import React, { Component } from 'react';
import './bookcase.scss';

import Shelf from '../shelf';
import Book from '../../types/book';
import DefaultBooks from '../../data/books.json';

interface BookcaseProps {
    books?: Book[]
}

interface BookcaseState {
    books: Book[]
}

export default class Bookcase extends Component<BookcaseProps, BookcaseState> {

    constructor(props: BookcaseProps) {
        super(props);
        this.state = { books: props.books ? props.books : DefaultBooks };
    }
    
    render() {
        return (
            <div>
                <Shelf books={this.state.books} />
            </div>
        );
    }
}
