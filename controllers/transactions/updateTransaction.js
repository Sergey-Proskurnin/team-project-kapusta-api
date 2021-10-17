const { Transaction } = require('../../model/transaction');
const User = require('../../repositories/users');

const {
  HttpCode: { CREATED, NOT_FOUND },
} = require('../../helpers');

const updateTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Transaction.findByIdAndUpdate(
      { _id: id },
      req.body.transaction,
      {
        new: true,
      },
    );
    if (!result) {
      return res.status(NOT_FOUND).json({
        message: 'Not found',
      });
    }
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
      result,
      balance,
    });
  } catch (error) {
    next();
  }
};

module.exports = updateTransaction;
