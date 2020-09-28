const creations = require('../data/creations.json')

exports.imageGet = async (req, res) => {
    const creation = creations.filter(creation => id === req.params.id)
    const path = path.resolve(__dirname, './images/mcsex.png');
    console.log('sending image: ' + path);
    res.sendfile(path);
}