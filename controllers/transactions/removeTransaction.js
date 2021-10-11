const { Transaction } = require('../../model/transaction');

const {
  HttpCode: { OK, NOT_FOUND },
} = require('../../helpers');

const removeTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Transaction.findByIdAndRemove({ _id: id });
    if (!result) {
      return res.status(NOT_FOUND).json({
        message: 'Not found',
      });
    }
     res.status(OK).json({
      message: 'Your transaction was deleted!'
    });
  } catch (error) {
    next();
  }
};

module.exports = removeTransaction;
