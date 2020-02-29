
import mongoose, { Document, Schema } from 'mongoose';
import { IBook } from './book.model';

export interface IReview extends Document {
  name: string;
  book: IBook['_id'];
}

const ReviewSchema: Schema = new Schema({
  book: { type: Schema.Types.ObjectId, required: true },
  review: { type: String, required: true },
  username: { type: String, required: true }
});

export default mongoose.model<IReview>('Review', ReviewSchema);
