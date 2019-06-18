const express = require('express');
const multer = require('multer');
const PokemonController = require('./controllers/PokemonController');

const routes = express.Router();
const upload = multer();

// Pokemon.create({
//     _id: '1',
//     name: 'Bulbasaur',
//     types: [ 'poison', 'grass'],
//     description: 'A seed pokemon, with grows in city of Pallet',
//     abilities: ['imposter', 'limber'],
//     moves: [{ name: 'cut', moveType: 'normal', power: 50, accuracy: 95}],
//     species: [],
//     stats: [],
//     image: 'bulba.png',
//     location_encounters: []
// });

routes.get('/pokemon', PokemonController.index);
routes.get('/pokemon/:id', PokemonController.show);
routes.post('/pokemon', upload.single('image'), PokemonController.store);
routes.put('/pokemon/:id', PokemonController.update);
routes.delete('/pokemon/:id', PokemonController.destroy);

module.exports = routes;