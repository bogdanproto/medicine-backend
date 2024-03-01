import { status } from '../const/index.js';
import { HttpError } from '../helpers/index.js';

export const validateBody = schema => (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    next(HttpError({ ...status.BAD_DATA, message: error.message }));
  }

  next();
};
