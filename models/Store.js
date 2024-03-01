import { model } from 'mongoose';
import { mongooseStoreShema } from '../schema/store/index.js';

export const Store = model('store', mongooseStoreShema);
