const express = require('express');

const postController = require('../controllers/post-controller.js');

const router = express.Router();
router.get(':id/', postController.get);
router.get('/all', postController.getAll);
router.get('/image', postController.getImage);
router.get('/insert', postController.insert);

module.exports = router;