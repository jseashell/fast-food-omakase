const MongoClient = require('mongodb');
const uri = 'mongodb://localhost:27017/test?retryWrites=true&w=majority'

exports.insert = async (req, res) => {
    await MongoClient.connect(uri, { useUnifiedTopology: true })
        .then(client => {
            const db = client.db('fast-food-omakase');
            const collection = db.collection('posts');
            collection.insertOne(req.body);
            console.log('inserted ' + JSON.stringify(creation));
        })
        .catch(error => console.error(error));

};

exports.get = async (req, res) => {
};

exports.getAll = async (req, res) => {
    await MongoClient.connect(uri, { useUnifiedTopology: true })
        .then(client => {
            const db = client.db('fast-food-omakase');
            const collection = db.collection('post');
            collection.find().toArray()
                .then(posts => res.json(posts))
                .catch(error => console.error(error));
        })
        .catch(error => console.error(error));
};

exports.getImage = async (req, res) => {
    await MongoClient.connect(uri, { useUnifiedTopology: true })
        .then(client => {
            const db = client.db('fast-food-omakase');
            const collection = db.collection('image');

            const queryFilter = {
                "_id": MongoClient.ObjectId(req.query.id)
            }

            collection.find(queryFilter).toArray()
                .then(images => {
                    if (images.length > 1) {
                        throw new Error('Received multiple images for ObjectId("' + req.query.id + '".');
                    }
                    res.json(images[0]);
                })
                .catch(error => console.error(error));
        })
        .catch(error => console.error(error));
};