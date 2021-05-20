const router = require('express').Router();
const homeroutes = require('./home');

router.use('/', homeroutes);

module.exports = router;