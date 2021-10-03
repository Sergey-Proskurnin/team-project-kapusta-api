const { Transaction } = require('../../model/transaction');
const {
  HttpCode: { OK },
} = require('../../helpers');

const getAllTransactions = async (req, res, next) => {
  try {
    const result = await Transaction.find({});
    res.status(OK).json({
      result,
    });
  } catch (error) {
    next();
  }
};

module.exports = getAllTransactions;
