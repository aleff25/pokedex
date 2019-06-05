import React from 'react';

import {Pokemon} from "../components/Pokemon";
import {useFetch} from "../commons/hooks";
import {Pokemons} from "../services/Pokemons";

const container = {
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'center'
};

/**
 * start point of application
 */
const Main = () => {
    const [data, isLoading] = useFetch(Pokemons.searchAllPokes());

    return (
        <div style={container}>

            {!isLoading && data.results.map((pokemon) =>
                    <div key={pokemon.id}>
                        <Pokemon pokemon={pokemon}/>
                    </div>)
            }
        </div>
    );
};

export default Main;
