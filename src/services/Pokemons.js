/**
 * class with contains endpoints the fetch pokemons data
 */
export class Pokemons {

    static searchAllPokes() {
        return 'pokemon?offset=0&limit=151';
    }

    static searchPoke(id){
        return `pokemon/${id}`;
    }
}