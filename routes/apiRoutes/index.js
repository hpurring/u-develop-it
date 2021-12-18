const express = require('express');
const router = express.Router();
require('dotenv').config();


router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));

module.exports = router;

