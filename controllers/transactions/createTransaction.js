const { Transaction } = require('../../model/transaction');
const {
  HttpCode: { CREATED },
} = require('../../helpers');

const createTransaction = async (req, res, next) => {
  try {
    const result = await Transaction.create(req.body);
    res.status(CREATED).json({
      result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createTransaction;
