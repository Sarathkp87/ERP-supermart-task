

import StockTransaction from '../models/StockTransaction.js';
import Product from '../models/Product.js';
import Supplier from '../models/Supplier.js';

// 🔹 Add Stock Transaction
export const addStockTransaction = async (req, res) => {
  try {
    const { product_id, quantity, transaction_type, supplier_id } = req.body;

    const newTransaction = new StockTransaction({ product_id, quantity, transaction_type });
    await newTransaction.save();

    await updateSupplierProductInfo(supplier_id, product_id, quantity);

    res.status(201).json({ message: 'Transaction added & supplier updated', newTransaction });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding stock transaction' });
  }
};

// 🔹 Update Stock Transaction
export const updateStockTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { product_id, quantity, transaction_type, supplier_id } = req.body;

    const updated = await StockTransaction.findByIdAndUpdate(id, {
      product_id,
      quantity,
      transaction_type,
    }, { new: true });

    if (!updated) return res.status(404).json({ message: 'Transaction not found' });

    await updateSupplierProductInfo(supplier_id, product_id, quantity);

    res.status(200).json({ message: 'Transaction updated & supplier updated', updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating stock transaction' });
  }
};

// 🔹 Reusable: Supplier Update Logic
const updateSupplierProductInfo = async (supplier_id, product_id, quantity) => {
  if (!supplier_id) return;

  const supplier = await Supplier.findOne({ supplier_id });
  const product = await Product.findById(product_id);
  if (!supplier || !product) return;

  supplier.productSupplied = {
    item: product.name,
    quantity: (supplier.productSupplied?.quantity || 0) + quantity
  };

  await supplier.save();
};

export const getAllStockTransactions = async (req, res) => {
    try {
      const transactions = await StockTransaction.find()
        .populate('product_id', 'name price') // populate product name & price
        .sort({ date: -1 }); // optional: sort by newest first
  
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch stock transactions', error });
    }
  };
