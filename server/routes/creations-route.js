const express = require('express')
const creationsController = require('../controllers/creations-controller.js')
const router = express.Router()

// Create rout between creationsController and '/all' endpoint
// Note:
// Main route (in server.js) for creations
// is set to '/creations'
// This means that all creations routes
// will be prefixed with /creations'
// i.e.: '/all' will become '/creations/all'
router.get('/all', creationsController.creationsGetAll)

module.exports = router