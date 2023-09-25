import mongoose, { Schema, model } from 'mongoose';
import { IService } from '@/interfaces';

const serviceSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  images: [{ type: String }],
  price: { type: Number },
  inStock: { type: Number, required: true, default: 1 },
  isVisible: { type: Boolean, required: true, default: true },
  lang: { type: String, enum: ['es', 'en'], default: 'es' },
});

const Service = mongoose.models.Service<IService> || model('Service', serviceSchema);

export default Service;
