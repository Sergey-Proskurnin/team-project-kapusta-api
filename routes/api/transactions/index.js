const express = require('express');
const router = express.Router();
const { validationTransactionSchema } = require('./validation');
const guard = require('../../../helpers/guard');

const { transactions: ctrl } = require('../../../controllers');

router.get('/', guard, ctrl.getAllTransactionsByYear);
router.get('/:id', guard, ctrl.getTransactionById);
router.post('/', guard, validationTransactionSchema, ctrl.createTransaction);
router.delete('/:id', guard, ctrl.removeTransaction);
router.put('/:id', guard, validationTransactionSchema, ctrl.updateTransaction);

module.exports = router;
