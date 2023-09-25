'use strict';

let express = require('express');
let router = express.Router();
let controller = require('../controller/productsController');

// router.get ('/')



router.get('/', controller.show);
module.exports = router; 