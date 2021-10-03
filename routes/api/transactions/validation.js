const Joi = require('joi');

const {
  HttpCode: { BAD_REQUEST },
  validate,
} = require('../../../helpers');

const joiTransactionSchema = Joi.object({
  type: Joi.string().required(),
  date: Joi.date().required(),
  category: Joi.string().required(),
  subCategory: Joi.string().required(),
  sum: Joi.number().required(),
  day: Joi.number().integer().min(1).max(31),
  month: Joi.number().integer().min(1).max(12),
  year: Joi.number().integer().min(2000),
});

module.exports = {
  validationTransactionSchema: (req, res, next) => {
    if (
      'type' in req.body &&
      'date' in req.body &&
      'category' in req.body &&
      'sum' in req.body &&
      'subCategory' in req.body
    ) {
      return validate(joiTransactionSchema, req.body, next);
    }
    return res.status(BAD_REQUEST).json({
      status: 'error',
      code: BAD_REQUEST,
      message: 'Missing required field',
    });
  },
};
