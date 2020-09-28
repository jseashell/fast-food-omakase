const express = require('express')
const imageController = require('../controllers/image-controller.js')
const router = express.Router()

router.get('/:id', imageController.imageGet)

module.exports = router