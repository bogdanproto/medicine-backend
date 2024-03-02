import { Schema } from 'mongoose';
import validator from 'validator';

export const mongooseOrderShema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'User is required'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      validate: {
        validator: value => validator.isEmail(value),
        message: 'Email has wrong format',
      },
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
    },
    products: [
      {
        _id: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        imgCloud: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
