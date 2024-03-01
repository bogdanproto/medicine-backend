import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const createToken = _id => {
  const { PRIVATE_KEY } = process.env;

  return jwt.sign({ _id }, PRIVATE_KEY, { expiresIn: '12h' });
};
