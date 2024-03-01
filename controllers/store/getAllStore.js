import { status } from '../../const/index.js';
import { Store } from '../../models/Store.js';

export const getAllStore = async (req, res) => {
  const stores = await Store.find();

  res.json({ ...status.GET_SUCCESS, data: { stores } });
};
