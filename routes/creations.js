var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.render('creations', { title: 'Creations' });
});

module.exports = router;
