import React, { PureComponent } from 'react';
import Book from '../../types/book';
import AthanaeumBook from '../athanaeum-book';

interface Props {
    books: Book[]
}

export default class Shelf extends PureComponent<Props> {
    render() {
        return (
            <div>
                {this.props.books.map(book => {
                    return <AthanaeumBook author={book.author} title={book.title} key={book.title+book.author}></AthanaeumBook>
                })}
            </div>
        )
    }
}
