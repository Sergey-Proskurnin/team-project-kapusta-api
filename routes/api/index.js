const { Router } = require('express');
const router = Router();

router.use('/users', require('./users'));
router.use('/transaction', require('./transactions'));

module.exports = router;
