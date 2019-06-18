const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    types: [ String ],
    description: String,
    abilities: [ String ],
    moves: [{ name: String, moveType: String, power: Number, accuracy: Number}],
    species: [ { name: String } ],
    stats: [ { name: String, value: Number } ],
    image: String,
    location_encounters: [ { location: String}]
});

mongoose.model('pokemons', PokemonSchema);