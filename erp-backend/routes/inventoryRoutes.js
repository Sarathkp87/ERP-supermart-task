

import express from 'express';
import {
  addStockTransaction,
  updateStockTransaction,
  getAllStockTransactions
} from '../controllers/inventoryController.js';
import { verifyToken } from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/stock', addStockTransaction);
router.put('/stock/:id', updateStockTransaction);
router.get('/stock-transactions', getAllStockTransactions);

export default router;
