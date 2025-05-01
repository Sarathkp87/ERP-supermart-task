// import Supplier from '../models/Supplier.js';

// export const getSuppliers = async (req, res) => {
//   const suppliers = await Supplier.find();
//   res.json(suppliers);
// };

// export const createSupplier = async (req, res) => {
//   const supplier = new Supplier(req.body);
//   await supplier.save();
//   res.status(201).json(supplier);
// };


// export const updateSupplier = async (req, res) => {
//   const supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(supplier);
// };

// export const deleteSupplier = async (req, res) => {
//   await Supplier.findByIdAndDelete(req.params.id);
//   res.json({ message: 'Supplier deleted' });
// };

import Supplier from '../models/Supplier.js';

// GET all suppliers
export const getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.status(200).json({
      status: 'success',
      message: 'Suppliers retrieved successfully',
      data: suppliers
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error fetching suppliers',
      error: error.message
    });
  }
};

// CREATE a new supplier
export const createSupplier = async (req, res) => {
  try {
    const supplier = new Supplier(req.body);
    const savedSupplier = await supplier.save();
    res.status(201).json({
      status: 'success',
      message: 'Supplier created successfully',
      data: savedSupplier
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Error creating supplier',
      error: error.message
    });
  }
};

// UPDATE an existing supplier
export const updateSupplier = async (req, res) => {
  try {
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedSupplier) {
      return res.status(404).json({
        status: 'error',
        message: 'Supplier not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Supplier updated successfully',
      data: updatedSupplier
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Error updating supplier',
      error: error.message
    });
  }
};

// DELETE a supplier
export const deleteSupplier = async (req, res) => {
  try {
    const deletedSupplier = await Supplier.findByIdAndDelete(req.params.id);

    if (!deletedSupplier) {
      return res.status(404).json({
        status: 'error',
        message: 'Supplier not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Supplier deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error deleting supplier',
      error: error.message
    });
  }
};

