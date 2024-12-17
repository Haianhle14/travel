var express = require('express');
var router = express.Router();

const meController = require('../app/controrllers/meController');

router.get('/store/tours', meController.storeTours);
router.get('/trash/tours', meController.trashTours);

module.exports = router;
