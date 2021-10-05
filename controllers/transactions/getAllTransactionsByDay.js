const { Transaction } = require('../../model/transaction');
const {
  HttpCode: { OK },
} = require('../../helpers');

const getAllTransactionsByDay = async (req, res, next) => {
  try {
    const { day, month, year } = req.body;
    const result = await Transaction.find({
      owner: req.user._id,
      day,
      month,
      year,
    });
    res.status(OK).json({
      result,
    });
  } catch (error) {
    next();
  }
};

module.exports = getAllTransactionsByDay;
