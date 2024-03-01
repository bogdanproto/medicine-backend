import { model } from 'mongoose';
import { mongooseOrderShema } from '../schema/order/index.js';

export const Order = model('order', mongooseOrderShema);
