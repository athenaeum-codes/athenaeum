import React, { useEffect, useState } from 'react'

interface BookProps {
    author?: string;
    title?: string;
}

const AthanaeumBook: React.FC<BookProps> = ({ author, title }) => {
    const [red,] = useState(Math.random() * 255);
    const [green,] = useState(Math.random() * 255);
    const [blue,] = useState(Math.random() * 255);

    return (
        <div>
            <h1 style={{ color: `rgb(${red},${green},${blue})` }}>{title}</h1>
            <h2>{author}</h2>
        </div>
    );
}

AthanaeumBook.defaultProps = {
    author: "Brandon Sanderson",
    title: "The Way of Kings"
}

export default AthanaeumBook;