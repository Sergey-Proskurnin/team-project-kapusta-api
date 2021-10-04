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
  /* balance: Joi.number(), */
});

module.exports = {
  validationTransactionSchema: (req, res, next) => {
    if (
      'type' in req.body.transaction &&
      'date' in req.body.transaction &&
      'category' in req.body.transaction &&
      'sum' in req.body.transaction &&
      'subCategory' in req.body.transaction
    ) {
      return validate(joiTransactionSchema, req.body.transaction, next);
    }
    return res.status(BAD_REQUEST).json({
      status: 'error',
      code: BAD_REQUEST,
      message: 'Missing required field',
    });
  },
};