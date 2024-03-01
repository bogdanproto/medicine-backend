import { status } from '../../const/index.js';
import { Drug } from '../../models/Drug.js';

export const createDrug = async (req, res) => {
  const drug = req.body;
  const newDrug = await Drug.create(drug);

  res.json({ ...status.GET_SUCCESS, data: { newDrug } });
};
