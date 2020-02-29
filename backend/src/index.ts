
import { Request, Response } from 'express';
import graphqlHTTP from 'express-graphql';
import { request } from 'graphql-request';
import mongoose from 'mongoose';
import morgan from 'morgan';
import winston from 'winston';
import BookModel from './models/book.model';

import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'graphql';
import typeDefs from './schema';

// tslint is too aggressive and i dont want to fuck with tslint config rn
/* tslint:disable */
const express = require('express');
const app = express();

const port = 8080; // default port to listen
const url = 'mongodb://localhost:27017';
const databaseName = 'athenaeum';

const logger = winston.createLogger({
    defaultMeta: { service: 'user-service' },
    format: winston.format.json(),
    level: 'info',
    transports: [
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

const status = {
    OK: 200,
    INTERNAL_SERVER_ERROR: 500
};

app.use(morgan('dev'));
// define a route handler for the default home page
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    book: String
  }

  type Book {
      title: String,
      author: String,
      _id: ID,
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  book: () => {
    return 'Hello world!';
  },
};

const server = new ApolloServer({ typeDefs });
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

// Connecting to the database and starting the server
mongoose.connect('mongodb://localhost:27017/' + databaseName, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    logger.info(`Successfully connected to database ${url}`);

    // Start the Express server
    app.listen(port, () => {
        logger.info(`Server listening on port:${port}`);
    });
});

// Root
app.get('/', (req: Request, res: Response) => {
    res.send('Hello world updated!1');
});

app.get('/book', (req: Request, res: Response) => {

    const title = req.query.title ? req.query.title : '1984';

    BookModel.find({ title }, (err: string, books: []) => {
        if (err) {
            logger.error(err);
            res.status(status.INTERNAL_SERVER_ERROR).send();
        }
        res.status(status.OK).send(books);
    });
});

app.post('/book', (req: Request, res: Response) => {
    const future = new BookModel({ title: '1984', author: 'George Orwell', genre: 'non-fiction', keywords: ['1984', 'orwell', 'george'] });
    future.save();
});
