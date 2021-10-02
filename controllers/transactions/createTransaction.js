const { Transaction } = require('../../model/transaction');

const createTransaction = async (req, res, next) => {
  try {
    const result = await Transaction.create(req.body);
    res.status(201).json({
      result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createTransaction;
