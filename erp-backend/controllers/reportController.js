import Product from '../models/Product.js';

export const getLowStockReport = async (req, res) => {
  const lowStockProducts = await Product.find({ stock_level: { $lt: 100 } });
  res.json(lowStockProducts);
};
