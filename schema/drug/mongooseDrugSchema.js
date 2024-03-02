import { Schema } from 'mongoose';

export const mongooseDrugShema = new Schema(
  {
    store: {
      type: Schema.Types.ObjectId,
      ref: 'store',
      required: [true, 'Store is required'],
    },
    title: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, 'Set title drug'],
    },
    price: {
      type: Number,
      required: [true, 'Set price drug'],
    },
    imgCloud: {
      type: String,
      required: [true, 'Img is required'],
    },
  },
  { timestamps: true }
);
