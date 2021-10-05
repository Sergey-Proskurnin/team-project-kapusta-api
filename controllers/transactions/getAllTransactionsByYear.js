const { Transaction } = require('../../model/transaction');
const {
  HttpCode: { OK },
} = require('../../helpers');

const getAllTransactionsByYear = async (req, res, next) => {
  try {
    const { year } = req.body;
    const result = await Transaction.find({ owner: req.user._id, year });
    res.status(OK).json({
      result,
    });
  } catch (error) {
    next();
  }
};

module.exports = getAllTransactionsByYear;
