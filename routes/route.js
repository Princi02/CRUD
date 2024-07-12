import express from 'express';
import { homeControllers , createControllers, readControllers,editController,  updateController, deleteController } from '../controllers/homeControllers.js';
const router = express.Router();


router.get('/',homeControllers);
router.get('/create',homeControllers);
router.post('/create',createControllers);
router.get('/read', readControllers);
router.get('/edit/:id',editController);
router.post('/update/:id',updateController);
router.get('/delete/:id' , deleteController)
export default router;