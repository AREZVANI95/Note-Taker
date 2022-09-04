const router = require('express').Router();
const routerNote = require('../notes.js');

router.use(routerNote);

module.exports = router;