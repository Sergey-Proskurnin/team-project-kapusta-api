const { Transaction } = require('../../model/transaction');
const {
  HttpCode: { OK },
} = require('../../helpers');

const getAllTransactionsByMonth = async (req, res, next) => {
  try {
    const result = await Transaction.find({ owner: req.user._id });
    res.status(OK).json({
      result,
    });
  } catch (error) {
    next();
  }
};

module.exports = getAllTransactionsByMonth;
