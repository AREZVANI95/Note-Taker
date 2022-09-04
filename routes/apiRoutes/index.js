const router = require('express').Router();
const apiRouter = require('../apiRoutes/apiRoutes.js');

router.use(apiRouter);

module.exports = router;