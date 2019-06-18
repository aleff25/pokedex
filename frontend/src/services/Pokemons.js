/**
 * class with contains endpoints the fetch pokemons data
 */
export class Pokemons {

    static searchAllPokes() {
        return '/pokemon';
    }

    static searchPoke(id){
        return `/pokemon/${id}`;
    }

    static addNewPokemon() {
        return '/pokemon';
    }

}