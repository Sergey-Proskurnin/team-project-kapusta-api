const Joi = require('joi');

const {
  HttpCode: { BAD_REQUEST },
  validate,
} = require('../../../helpers');

const joiTransactionSchema = Joi.object({
  type: Joi.string().required(),
  id: Joi.string(),
  date: Joi.string().required(),
  category: Joi.string().required(),
  subCategory: Joi.string().required(),
  sum: Joi.number().required(),
  day: Joi.string(),
  month: Joi.string(),
  year: Joi.string(),
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
