const router = require('express').Router();
const homeroutes = require('./home');
const dashroutes = require('./dashboard');

router.use('/', homeroutes);

router.use('/dashboard', dashroutes)

module.exports = router;