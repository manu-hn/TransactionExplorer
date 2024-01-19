import express from 'express';
import { fetchBasedOnQuery,  fetchBasedOnStatistics,  fetchDataForBarChart,  fetchDataForPieCharts,  fetchDataOfAllOfThem,  initializeDatabase } from '../controllers/Transaction.controller.js';

const router=express.Router()

router.get('/initialize-database', initializeDatabase);
router.get('/search-query', fetchBasedOnQuery);
router.get('/statistics', fetchBasedOnStatistics);
router.get('/bar-chart', fetchDataForBarChart);
router.get('/pie-chart', fetchDataForPieCharts);
router.get('/three-apis', fetchDataOfAllOfThem);

export default router;