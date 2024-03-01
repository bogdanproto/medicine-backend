import { Schema } from 'mongoose';

export const mongooseStoreShema = new Schema(
  {
    title: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: [true, 'Set store'],
    },
    address: {
      type: String,
      required: [true, 'Adress is required'],
    },
  },
  { timestamps: true }
);
