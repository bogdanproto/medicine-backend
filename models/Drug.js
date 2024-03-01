import { model } from 'mongoose';
import { mongooseDrugShema } from '../schema/trip/mongooseDrugSchema.js';

export const Drug = model('drug', mongooseDrugShema);
