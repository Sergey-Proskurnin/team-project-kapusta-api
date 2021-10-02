const { Transaction } = require('../../model/transaction');

const getTransactionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Transaction.findById(id);
    if (!result) {
      return res.status(404).json({
        message: 'Not found',
      });
    }
    res.status(200).json({
      result,
    });
  } catch (error) {
    next();
  }
};

module.exports = getTransactionById;
