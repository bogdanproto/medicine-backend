import { status } from '../../const/index.js';
import { Drug } from '../../models/Drug.js';

export const getAllDrugByStore = async (req, res) => {
  const { id: storeId } = req.params;
  const drugs = await Drug.find({ store: storeId });

  res.json({ ...status.GET_SUCCESS, data: { drugs } });
};
