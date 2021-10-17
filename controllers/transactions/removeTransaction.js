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
        status: 'error',
        code: '404',
        message: 'Id of transaction not found',
      });
    }
    res.status(OK).json({
      code: '200',
      message: 'Your transaction was deleted!',
    });
  } catch (error) {
    next();
  }
};

module.exports = removeTransaction;
