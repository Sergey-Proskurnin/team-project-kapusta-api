const { Transaction } = require('../../model/transaction');
const {
  HttpCode: { OK },
} = require('../../helpers');

const getAllTransactionsByPeriod = async (req, res, next) => {
  try {
    const { period } = req.params;
    const periodLenght = period.length;
    if (period) {
      if (periodLenght === 4) {
        const year = period;
        const result = await Transaction.find({ owner: req.user._id, year });
        res.status(OK).json({
          result,
        });
      }
      if (periodLenght === 7) {
        const newPeriod = period.split('-');
        const month = newPeriod[0];
        const year = newPeriod[1];
        const result = await Transaction.find({
          owner: req.user._id,
          year,
          month,
        });
        res.status(OK).json({
          result,
        });
      }
    }
  } catch (error) {
    next();
  }
};

module.exports = getAllTransactionsByPeriod;
