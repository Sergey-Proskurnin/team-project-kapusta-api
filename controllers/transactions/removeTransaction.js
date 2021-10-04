const { Transaction } = require('../../model/transaction');
const User = require('../../repositories/users');

const {
  HttpCode: { OK, NOT_FOUND },
} = require('../../helpers');

const removeTransaction = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const userBalance = req.body.balance;
    const resultBalance = await User.createBalance(userId, userBalance);
    const { id } = req.params;
    const result = await Transaction.findByIdAndRemove({ _id: id });
    if (!result && !resultBalance) {
      return res.status(NOT_FOUND).json({
        message: 'Not found',
      });
    }
    const { balance } = resultBalance;
    res.status(OK).json({
      balance,
    });
  } catch (error) {
    next();
  }
};

module.exports = removeTransaction;
