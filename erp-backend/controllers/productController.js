// import Product from '../models/Product.js';

// export const getProducts = async (req, res) => {
//   const products = await Product.find();
//   res.json(products);
// };

// export const createProduct = async (req, res) => {
//   const product = new Product(req.body);
//   await product.save();
//   res.status(201).json(product);
// };

// export const updateProduct = async (req, res) => {
//   const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(product);
// };

// export const deleteProduct = async (req, res) => {
//   await Product.findByIdAndDelete(req.params.id);
//   res.json({ message: 'Product deleted' });
// };



import Product from '../models/Product.js';

// GET all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: 'success',
      message: 'Products fetched successfully',
      data: products
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch products',
      error: error.message
    });
  }
};

// CREATE new product
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json({
      status: 'success',
      message: 'Product created successfully',
      data: savedProduct
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Failed to create product',
      error: error.message
    });
  }
};

// UPDATE product
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: 'Product not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Product updated successfully',
      data: product
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Failed to update product',
      error: error.message
    });
  }
};

// DELETE product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: 'Product not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Product deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete product',
      error: error.message
    });
  }
};
