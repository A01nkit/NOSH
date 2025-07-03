import express from 'express'
import { addDish, getDishes, togglePublishStatusDishes } from '../controllers/dish.controller.js';


const router = express.Router();

router.get('/', getDishes);
router.patch('/:id/toggle', togglePublishStatusDishes);
router.post('/', addDish);

export default router;