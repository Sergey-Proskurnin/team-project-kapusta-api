const { Transaction } = require('../../model/transaction');
const {
  HttpCode: { OK },
} = require('../../helpers');

const getAllTransactionsByMonth = async (req, res, next) => {
  try {
    const { month, year } = req.body;
    const result = await Transaction.find({ owner: req.user._id, month, year });
    res.status(OK).json({
      result,
    });
  } catch (error) {
    next();
  }
};

module.exports = getAllTransactionsByMonth;
