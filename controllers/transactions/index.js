const getAllTransactions = require('./getAllTransactions');
const createTransaction = require('./createTransaction');
const getTransactionById = require('./getTransactionById');
const removeTransaction = require('./removeTransaction');
const updateTransaction = require('./updateTransaction');

module.exports = {
  getAllTransactions,
  createTransaction,
  getTransactionById,
  removeTransaction,
  updateTransaction,
};
