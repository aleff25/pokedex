const mongoose = require('mongoose');
const Pokemon = mongoose.model('pokemons');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {

    async index(req, res) {
        const pokemons = await Pokemon.find();

        return res.json(pokemons);
    },

    async show(req, res) {
        const pokemon = await Pokemon.findById(req.params.id);

        return res.json(pokemon);
    },

    async store(req, res) {

        const { name, moves} = req.body;
        const { filename: image} = req.file;

        await sharp(req.file.path)
            .resize(200)
            .png({ quality: 70})
            .toFile(
                path.resolve(req.file.destination, 'resized', image),
            );

        fs.unlinkSync(req.file.path);

        const pokemon = await Pokemon.create({
            name,
            moves,
            image
        });

        return res.json(pokemon);
    },

    async update(req, res) {
        const pokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true});

        return res.json(pokemon);
    },

    async destroy(req, res) {
        await Pokemon.findByIdAndDelete(req.params.id);

        return res.send();
    }
}