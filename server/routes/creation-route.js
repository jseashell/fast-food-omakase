const express = require('express');
const creationController = require('../controllers/creation-controller.js');
const router = express.Router();

router.get(':id/', creationController.get);
router.get('/all', creationController.getAll);
router.get('/image', creationController.getImage);

module.exports = router;