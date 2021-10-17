const { Transaction } = require('../../model/transaction');
const User = require('../../repositories/users');

const {
  HttpCode: { CREATED, NOT_FOUND },
} = require('../../helpers');

const createTransaction = async (req, res, next) => {
  try {
    const newTransaction = { ...req.body.transaction, owner: req.user._id };
    const resultTransaction = await Transaction.create(newTransaction);
    const userId = req.user._id;
    const userBalance = req.body.balance;
    const resultBalance = await User.createBalance(userId, userBalance);
    if (!resultBalance) {
      return res
        .status(NOT_FOUND)
        .json({ status: 'error', code: NOT_FOUND, message: 'Not found' });
    }
    const { balance } = resultBalance;
    res.status(CREATED).json({
      status: 'Created',
      code: CREATED,
      resultTransaction,
      balance,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createTransaction;
