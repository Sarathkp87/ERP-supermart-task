import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  stock_level: { type: Number, default: 0 },
  supplier_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
});

export default mongoose.model('Product', productSchema);
