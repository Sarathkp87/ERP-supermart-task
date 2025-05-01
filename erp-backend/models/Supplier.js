import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact_info: {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    }
  },
  productSupplied:{
    item: String,
    quantity: Number
  },
  supplier_id:{
    type:Number,
  }
});

// module.exports = mongoose.model('Supplier', supplierSchema);
export default mongoose.model('Supplier', supplierSchema);
