import express from 'express';
import { authPath } from '../const/index.js';
import { joiLoginSchema, joiRegisterSchema } from '../schema/user/index.js';
import { validateBody } from '../middlewares/validateBoady.js';
import authCtrl from '../controllers/auth/index.js';
import { authenticate } from '../middlewares/authenticate.js';

// ============================================================

const authRouter = express.Router();

authRouter.post(
  authPath.REGISTER,
  validateBody(joiRegisterSchema),
  authCtrl.register
);

authRouter.post(authPath.LOGIN, validateBody(joiLoginSchema), authCtrl.login);

authRouter.post(authPath.LOGOUT, authenticate, authCtrl.logout);

authRouter.get(authPath.CURRENT, authenticate, authCtrl.getCurrent);

export default authRouter;
