const { Transaction } = require('../../model/transaction');
const {
  HttpCode: { OK, NOT_FOUND },
} = require('../../helpers');

const getTransactionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Transaction.findById(id);
    if (!result) {
      return res.status(NOT_FOUND).json({
        message: 'Not found',
      });
    }
    res.status(OK).json({
      result,
    });
  } catch (error) {
    next();
  }
};

module.exports = getTransactionById;
