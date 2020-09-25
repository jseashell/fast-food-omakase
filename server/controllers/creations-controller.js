const creations = require('../data/creations.json')

exports.creationsGetAll = async (req, res) => {
    res.json(creations)
}