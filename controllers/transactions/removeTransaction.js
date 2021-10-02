const { Transaction } = require('../../model/transaction');

const removeTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Transaction.findByIdAndRemove({ _id: id });
    if (!result) {
      return res.status(404).json({
        message: 'Not found',
      });
    }
    res.status(204).json({
      result,
    });
  } catch (error) {
    next();
  }
};

module.exports = removeTransaction;
