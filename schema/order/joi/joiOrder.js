import Joi from 'joi';

export const joiOrderCreateSchema = Joi.object({
  store: Joi.string().required().messages({
    'any.required': 'Store is required',
    'string.empty': 'Store is not allowed to be empty',
  }),
  name: Joi.string().required().messages({
    'any.required': 'Name is required',
    'string.empty': 'Name is not allowed to be empty',
  }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required()
    .messages({
      'any.required': 'Email is required',
      'string.empty': 'Email is not allowed to be empty',
    }),
  phone: Joi.string().required().messages({
    'any.required': 'phone is required',
    'string.empty': 'phone is not allowed to be empty',
  }),
  address: Joi.string().required().messages({
    'any.required': 'address is required',
    'string.empty': 'address is not allowed to be empty',
  }),
  products: Joi.array()
    .items(
      Joi.object({
        title: Joi.string().required(),
        quantity: Joi.number().required(),
        priceItem: Joi.number().required(),
      })
    )
    .required(),
  totalPrice: Joi.number().required(),
});
