const express = require('express');
const router = express.Router();
const {
  validationTransactionCreateSchema,
  validationTransactionUpdateSchema,
} = require('./validation');
const guard = require('../../../helpers/guard');

const { transactions: ctrl } = require('../../../controllers');

router.get('/:date', guard, ctrl.getAllTransactionsByDate);
router.get('/period/:period', guard, ctrl.getAllTransactionsByPeriod);
router.post(
  '/',
  guard,
  validationTransactionCreateSchema,
  ctrl.createTransaction,
);
router.delete('/:id', guard, ctrl.removeTransaction);
router.put(
  '/:id',
  guard,
  validationTransactionUpdateSchema,
  ctrl.updateTransaction,
);

module.exports = router;
