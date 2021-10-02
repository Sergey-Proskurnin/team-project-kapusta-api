const { Router } = require('express');
const router = Router();

router.use('/users', require('./users'));
router.use('/transaction', require('./transaction'));

module.exports = router;
