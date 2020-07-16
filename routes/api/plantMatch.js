const express = require('express');
const router = express.Router();
const plantMatchCtrl = require('../../controllers/plantMatch');

/*---------- Public Routes ----------*/
router.post('/plantMatch', plantMatchCtrl.create);

/*---------- Protected Routes ----------*/




module.exports = router;