import { ctrlDecorator } from '../../helpers/index.js';
import { createDrug } from './createDrug.js';
import { getAllDrugByStore } from './getAllDrugByStore.js';

export default {
  getAllDrugByStore: ctrlDecorator(getAllDrugByStore),
  createDrug: ctrlDecorator(createDrug),
};
