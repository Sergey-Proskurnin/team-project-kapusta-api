const { Transaction } = require('../../model/transaction');
const User = require('../../repositories/users');

const {
  HttpCode: { CREATED },
} = require('../../helpers');

const createTransaction = async (req, res, next) => {
  try {
    const resultTransaction = await Transaction.create(req.body);
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
      resultTransaction,
      balance,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createTransaction;
