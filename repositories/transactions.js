const Transaction = require('../model/transaction');

const create = async body => {
  const transaction = new Transaction(body);
  return await transaction.save();
};

module.exports = { create };
