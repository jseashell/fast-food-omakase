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
        return;
    }

    const creation = filteredCreations[0];

    // TODO Send binary data stored in database instead of loading from file
    const imagePath = path.resolve(__dirname, '../../public/images/' + creation.imageId + '.png');
    console.log('sending image: ' + imagePath);
    res.sendfile(imagePath);
};