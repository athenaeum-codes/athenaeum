import React from 'react'

interface BookProps {
    author?: string;
    title?: string;
}

const AthanaeumBook: React.FC<BookProps> = ({ author, title }) => (
    <div>
        <h1>{title}</h1>
        <h2>{author}</h2>
    </div>
);

AthanaeumBook.defaultProps = {
    author: "Brandon Sanderson",
    title: "The Way of Kings"
}

export default AthanaeumBook;