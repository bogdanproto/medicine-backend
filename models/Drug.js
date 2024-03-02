import { model } from 'mongoose';
import { mongooseDrugShema } from '../schema/drug/mongooseDrugSchema.js';

export const Drug = model('drug', mongooseDrugShema);
