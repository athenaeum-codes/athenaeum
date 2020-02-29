import mongoose, { Document, Schema } from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;
import {IReview} from './review.model';

export interface IBook extends Document {
    author: string;
    genre: string;
    keywords: [string];
    reviews: [
        IReview['_id']
    ];
    title: string;
}

const BookSchema: Schema = new Schema({
    _id: ObjectId,
    author: { type: String, required: true },
    genre: { type: String, required: true },
    keywords: { type: [String], required: true },
    reviews: { type: [ObjectId], required: false },
    title: { type: String, required: true }
});

export default mongoose.model<IBook>('Book', BookSchema);
