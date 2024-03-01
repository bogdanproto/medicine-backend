import jwt from 'jsonwebtoken';
import { status } from '../const/index.js';
import { HttpError } from '../helpers/index.js';
import { User } from '../models/User.js';

export const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;

  const [bearer, token] = authorization?.split(' ') ?? [];

  if (bearer !== 'Bearer' || !token) {
    next(HttpError(status.USER_UNAUTHORIZEDTOKEN));
    return;
  }

  try {
    const { PRIVATE_KEY } = process.env;
    const { _id } = jwt.verify(token, PRIVATE_KEY);

    const user = await User.findById(_id);

    if (!user || !user.token || user.token !== token) {
      next(HttpError(status.USER_UNAUTHORIZEDTOKEN));
    }
    req.user = user;
    next();
  } catch (error) {
    next(HttpError(status.USER_UNAUTHORIZEDTOKEN));
  }
};
