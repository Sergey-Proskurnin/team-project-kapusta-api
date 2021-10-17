const Joi = require('joi');

const {
  HttpCode: { BAD_REQUEST },
  validate,
} = require('../../../helpers');

const joiTransactionCreateSchema = Joi.object({
  type: Joi.string().required(),
  date: Joi.string().required(),
  category: Joi.string().required(),
  subCategory: Joi.string().required(),
  sum: Joi.number().required(),
  day: Joi.string().optional(),
  month: Joi.string().optional(),
  year: Joi.string().optional(),
});

const joiTransactionUpdateSchema = Joi.object({
  type: Joi.string().optional(),
  date: Joi.string().optional(),
  category: Joi.string().optional(),
  subCategory: Joi.string().optional(),
  sum: Joi.number().optional(),
  day: Joi.string().optional(),
  month: Joi.string().optional(),
  year: Joi.string().optional(),
  owner: Joi.string().optional(),
  _id: Joi.string(),
});

module.exports = {
  validationTransactionCreateSchema: (req, res, next) => {
    if (
      'type' in req.body.transaction &&
      'date' in req.body.transaction &&
      'category' in req.body.transaction &&
      'sum' in req.body.transaction &&
      'subCategory' in req.body.transaction
    ) {
      return validate(joiTransactionCreateSchema, req.body.transaction, next);
    }
    return res.status(BAD_REQUEST).json({
      status: 'error',
      code: BAD_REQUEST,
      message: 'Missing required field',
    });
  },
  validationTransactionUpdateSchema: (req, res, next) => {
    if (Object.keys(req.body.transaction).length === 0) {
      return res.status(BAD_REQUEST).json({
        status: 'error',
        code: BAD_REQUEST,
        message: 'Missing fields',
      });
    }
    return validate(joiTransactionUpdateSchema, req.body.transaction, next);
  },
};
