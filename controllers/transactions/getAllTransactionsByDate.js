const { Transaction } = require('../../model/transaction');
const {
  HttpCode: { OK },
} = require('../../helpers');

const getAllTransactionsByDate = async (req, res, next) => {
  try {
    const { date } = req.params;
    const result = await Transaction.find({
      owner: req.user._id,
      date,
    });
    res.status(OK).json({
      status: 'Ok',
      code: OK,
      result,
    });
  } catch (error) {
    next();
  }
};

module.exports = getAllTransactionsByDate;
