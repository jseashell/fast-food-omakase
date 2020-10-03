// Import express framework
const express = require('express');
const { MongoClient } = require('mongodb');

// Import middleware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');

// Import routes
const homeRouter = require('./routes/home-route');
const postRouter = require('./routes/post-route');

// Setup default port
const PORT = process.env.PORT || 4000;

// Create express app
const app = express();

// Implement middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'));;

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
    app.get('*', (req, res) => {
        res.sendFile('build/index.html', { root: __dirname });
    });
}

app.use('/api', homeRouter);
app.use('/post', postRouter);

// Implement route for errors
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

// Start express app
app.listen(PORT, function () {
    console.log(`Server is running on: ${PORT}`)
});