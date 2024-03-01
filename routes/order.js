import express from 'express';
import { orderPath } from '../const/index.js';
import orderCtrl from '../controllers/order/index.js';
import { authenticate } from '../middlewares/authenticate.js';

// ============================================================

const orderRouter = express.Router();

orderRouter.get(orderPath.BASE, authenticate, orderCtrl.getAllOrder);

orderRouter.post(orderPath.BASE, authenticate, orderCtrl.createOrder);

export default orderRouter;
