import { status } from '../../const/index.js';
import { Order } from '../../models/Order.js';

export const getAllOrder = async (req, res) => {
  const { _id } = req.user;
  const orders = await Order.find({ owner: _id }).select('-owner');

  res.json({ ...status.GET_SUCCESS, data: { orders } });
};
