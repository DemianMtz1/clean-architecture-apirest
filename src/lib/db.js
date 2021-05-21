const mongoose = require('mongoose');

const DB_USER = 'demian1';
const DB_PASSWORD = 'ceick450';
const DB_HOST = 'kodemia-cluster.ptymh.mongodb.net';
const DB_NAME = 'kodemia';

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

function connectDB() {
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = connectDB;