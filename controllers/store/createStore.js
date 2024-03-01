import { status } from '../../const/index.js';
import { Store } from '../../models/Store.js';

export const createStore = async (req, res) => {
  const store = req.body;
  const stores = await Store.create(store);

  res.json({ ...status.GET_SUCCESS, data: { stores } });
};
