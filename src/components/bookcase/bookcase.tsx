import React, { Component } from 'react';
import './bookcase.scss';

import Shelf from '../shelf';
import Book from '../../types/book';
import DefaultBooks from '../../data/books.json';
import TopNav from '../top-nav';
import Category from '../category';
import { Route } from 'react-router';

interface IBookcaseProps {
    books?: Book[]
    collection: Number
}

interface IBookcaseState {
    books: Book[]
    categories: string[]
}

export default class Bookcase extends Component<IBookcaseProps, IBookcaseState> {

    constructor(props: IBookcaseProps) {
        super(props);
        this.state = { books: props.books ? props.books : DefaultBooks,
            categories: ["All","Fantasy"]};
    }

    render() {
        let categories = this.state.categories;
        return (
            <div>
                <TopNav categories={categories} />
                {categories.map(category => <Route path={`/${category}`} component={Category}></Route>)}
                <Shelf books={this.state.books} />
            </div>
        );
    }
}
