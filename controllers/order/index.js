import { ctrlDecorator } from '../../helpers/index.js';
import { createOrder } from './createOrder.js';
import { getAllOrder } from './getAllOrder.js';

export default {
  getAllOrder: ctrlDecorator(getAllOrder),
  createOrder: ctrlDecorator(createOrder),
};
