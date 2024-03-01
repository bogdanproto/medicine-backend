import express from 'express';
import { drugPath } from '../const/index.js';
import drugCtrl from '../controllers/trip/index.js';
import { authenticate } from '../middlewares/authenticate.js';

// ============================================================

const drugRouter = express.Router();

drugRouter.get(drugPath.ID, authenticate, drugCtrl.getAllDrugByStore);

drugRouter.post(drugPath.BASE, authenticate, drugCtrl.createDrug);

export default drugRouter;
