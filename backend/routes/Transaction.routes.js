import express from 'express';
import { fetchBasedOnQuery,  fetchBasedOnStatistics,  initializeDatabase } from '../controllers/Transaction.controller.js';

const router=express.Router()

router.get('/initialize-database', initializeDatabase);
router.get('/transaction', fetchBasedOnQuery);
router.get('/statistics', fetchBasedOnStatistics);

export default router;