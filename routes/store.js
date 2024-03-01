import express from 'express';
import { storePath } from '../const/index.js';
import storeCtrl from '../controllers/store/index.js';
import { authenticate } from '../middlewares/authenticate.js';

// ============================================================

const storeRouter = express.Router();

storeRouter.get(storePath.BASE, authenticate, storeCtrl.getAllStore);
storeRouter.post(storePath.BASE, authenticate, storeCtrl.createStore);

export default storeRouter;
