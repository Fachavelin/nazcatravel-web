import mongoose, { Model, Schema, model } from 'mongoose';
import { ITour } from '@/interfaces';

const tourSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  shortDescription: { type: String, required: true, unique: true },
  body: { type: String, required: true },
  images: [{ type: String }],
  price: { type: Number },
  inStock: { type: Number, required: true, default: 1 },
  isVisible: { type: Boolean, required: true, default: true },
  lang: { type: String, enum: ['es', 'en'], default: 'es' },
});

const Tour: Model<ITour> = mongoose.models.Tour || model('Tour', tourSchema);

export default Tour;
