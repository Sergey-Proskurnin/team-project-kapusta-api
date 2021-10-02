const { Transaction } = require('../../model/transaction');

const getAllTransactions = async (req, res, next) => {
  try {
    const result = await Transaction.find({});
    res.status(200).json({
      result,
    });
  } catch (error) {
    next();
  }
};

module.exports = getAllTransactions;
