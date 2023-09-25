'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/IndexContronller');


//router
router.get('/', controller.showHomepage);

router.get('/:page', controller.showPage);


module.exports = router;