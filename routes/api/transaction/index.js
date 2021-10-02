const express = require('express');
const router = express.Router();
const { transactions: ctrl } = require('../../../controllers');

router.get('/', ctrl.getAllTransactions);
router.get('/:id', ctrl.getTransactionById);
router.post('/', ctrl.createTransaction);
router.delete('/:id', ctrl.removeTransaction);

module.exports = router;
