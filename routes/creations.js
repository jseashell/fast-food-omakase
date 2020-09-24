var express = require('express');
var router = express.Router();

const creationsTitle = 'Creations';

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.render('creations',
		{
			title: creationsTitle,
			creationsTitle: creationsTitle
		});
});

module.exports = router;
