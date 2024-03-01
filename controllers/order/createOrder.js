import { status } from '../../const/index.js';
import { Order } from '../../models/Order.js';

export const createOrder = async (req, res) => {
  const obj = req.body;
  const { _id } = req.user;
  obj.owner = _id;

  const order = await Order.create(obj);

  res.json({ ...status.GET_SUCCESS, data: { order } });
};
