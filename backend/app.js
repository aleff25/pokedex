const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');
const requireDir = require("require-dir");

class AppController {

    constructor() {
        this.express = express();

        this.db();
        this.middlewares();
        this.routes();
    }

    db() {
        mongoose.connect('mongodb://localhost:27017/pokeapi', { useNewUrlParser: true });
        requireDir('./src/models');
    }

    middlewares() {
        this.express.use(express.json());
        this.express.use(cors());
    }

    routes() {
        this.express.use('/api/v1/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));
        this.express.use('/api/v1', require('./src/routes'));
    }


}

module.exports = new AppController().express;