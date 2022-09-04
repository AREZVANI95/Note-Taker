const router = require('express').Router();
const routerNote = require('../apiRoutes/noteRouter');

router.use(routerNote);

module.exports = router;