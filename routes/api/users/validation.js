const Joi = require('joi');

const {
  HttpCode: { BAD_REQUEST },
  validate,
} = require('../../../helpers');

const schemaPаramsrUserSignup = Joi.object({
  name: Joi.string()
    .pattern(/^[A-Za-zА-Яа-яЁёЄєЇї' '\-()0-9]{3,30}$/)
    .required(),
  password: Joi.string()
    .pattern(/[0-9A-Za-zА-Яа-яЁёЄєЇї!@#$%^&*]{6,}/)
    .required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: false }).required(),
  subscription: Joi.string().optional(),
});

const schemaPаramsrUserLogin = Joi.object({
  password: Joi.string()
    .pattern(/[0-9A-Za-zА-Яа-яЁёЄєЇї!@#$%^&*]{6,}/)
    .required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: false }).required(),
  subscription: Joi.string().optional(),
});

const schemaPаramsrUserName = Joi.object({
  name: Joi.string()
    .pattern(/^[A-Za-zА-Яа-яЁёЄєЇї' '\-()0-9]{3,30}$/)
    .required(),
  avatar: Joi.string().optional(),
});

const schemaBalanceUser = Joi.object({
  balance: Joi.number(),
});

const shemaVerifyEmail = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: false }).required(),
});

module.exports = {
  validationPаramsUserSignup: (req, res, next) => {
    if ('password' in req.body && 'email' in req.body) {
      return validate(schemaPаramsrUserSignup, req.body, next);
    }
    return res.status(BAD_REQUEST).json({
      status: 'error',
      code: BAD_REQUEST,
      message: 'Missing required name field',
    });
  },
  validationPаramsUserLogin: (req, res, next) => {
    if ('password' in req.body && 'email' in req.body) {
      return validate(schemaPаramsrUserLogin, req.body, next);
    }
    return res.status(BAD_REQUEST).json({
      status: 'error',
      code: BAD_REQUEST,
      message: 'Missing required name field',
    });
  },
  validationPаramsUserName: (req, res, next) => {
    if ('name' in req.body) {
      return validate(schemaPаramsrUserName, req.body, next);
    }
    return res.status(BAD_REQUEST).json({
      status: 'error',
      code: BAD_REQUEST,
      message: 'Missing required name field',
    });
  },
  validationBalanceUser: (req, res, next) => {
    if (!isNaN(req.body.balance)) {
      return validate(schemaBalanceUser, req.body, next);
    }
    return res.status(BAD_REQUEST).json({
      status: 'error',
      code: BAD_REQUEST,
      message: 'Missing required name field',
    });
  },
  validationVerificationEmail: (req, res, next) => {
    if ('email' in req.body) {
      return validate(shemaVerifyEmail, req.body, next);
    }
    return res.status(BAD_REQUEST).json({
      status: 'error',
      code: BAD_REQUEST,
      message: 'Missing required field email',
    });
  },
};
