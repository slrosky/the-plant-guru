const express = require('express');
var router = express.Router();
const plantsCtrl = require('../../controllers/api/plants')

router.get('/', plantsCtrl.plants);
// Protected server routes

module.exports = router;