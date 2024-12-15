var express = require('express');
var router = express.Router();

const siteController = require('../app/controrllers/siteController');

router.get('/', siteController.index);

module.exports = router;
