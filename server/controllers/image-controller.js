const creations = require('../data/creations.json')

exports.imageGet = async (req, res) => {
    const id = req.params.id;
    const creation = creations.filter(creation => id === creation.id)

    // TODO load from file {creation.imageId}

    res.json(creation.imageId)
}