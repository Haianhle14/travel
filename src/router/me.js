var express = require('express');
var router = express.Router();

const meController = require('../app/controrllers/meController');

router.get('/store/tours', meController.storeTours);

module.exports = router;
