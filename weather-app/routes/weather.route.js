const express = require('express');

const controller = require('../controllers/weather.controller.js');

const router = express.Router();

router.get('/', controller.index);

router.post('/', controller.post);

module.exports = router;