import express from 'express';
import { getLowStockReport } from '../controllers/reportController.js';
import { verifyToken } from '../middleware/authMiddleware.js';


const router = express.Router();
router.get('/low-stock', getLowStockReport);

export default router;
