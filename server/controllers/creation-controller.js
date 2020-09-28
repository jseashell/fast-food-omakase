const path = require('path');
const creations = require('../data/creations.json');

exports.get = async (req, res) => {
    const creation = creations.filter(creation => creation.id === req.query.id)
    res.json(creation);
};
exports.getAll = async (req, res) => {
    res.json(creations);
};

exports.getImage = async (req, res) => {
    const filteredCreations = creations.filter(creation => creation.id === req.query.id);
    if (filteredCreations.length != 1) {
        res.status(500).send('Found multiple creations with id "' + req.query.id + '".');
    }

    const creation = filteredCreations[0];
    console.log('found creation by id: ' + JSON.stringify(creation))

    // TODO Send binary data stored in database instead of loading from file
    const imagePath = path.resolve(__dirname, '../../public/images/' + creation.imageId + '.png');
    console.log('sending image: ' + imagePath);
    res.sendfile(imagePath);
};