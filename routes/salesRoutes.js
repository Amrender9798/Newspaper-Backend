import express from 'express';
import { calculateSalesAndCash, saveSalesAndCash } from '../controllers/salesController.js';

const router = express.Router();

router.get('/',calculateSalesAndCash);

router.post('/',saveSalesAndCash);

export default router;