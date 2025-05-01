import mongoose from 'mongoose';

const stockTransactionSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, required: true },
  transaction_type: { type: String, enum: ['Purchase', 'Sale'], required: true },
  date: { type: Date, default: Date.now },
  supplier_id:{type:mongoose.Schema.Types.ObjectId,ref:'Supplier'}
});

export default mongoose.model('StockTransaction', stockTransactionSchema);
