const Users = require('../../repositories/users');
require('dotenv').config();

const {
  HttpCode: { OK, NOT_FOUND },
} = require('../../helpers');

const updateBalance = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const userBalance = req.body.balance;
    const balance = await Users.createBalance(userId, userBalance);
    if (balance) {
      return res
        .status(OK)
        .json({ status: 'success', code: OK, data: { balance: userBalance } });
    }
    return res
      .status(NOT_FOUND)
      .json({ status: 'error', code: NOT_FOUND, message: 'Not found' });
  } catch (error) {
    next(error);
  }
};

module.exports = updateBalance;
