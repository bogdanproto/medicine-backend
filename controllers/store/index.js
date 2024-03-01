import { ctrlDecorator } from '../../helpers/index.js';
import { createStore } from './createStore.js';
import { getAllStore } from './getAllStore.js';

export default {
  getAllStore: ctrlDecorator(getAllStore),
  createStore: ctrlDecorator(createStore),
};
