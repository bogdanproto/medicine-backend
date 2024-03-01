import { model } from 'mongoose';
import { mongooseUserShema } from '../schema/user/index.js';

export const User = model('user', mongooseUserShema);
