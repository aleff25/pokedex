import React, { useEffect, useState } from 'react';

import { Pokemon } from "../Pokemon";
import { useFetch } from "../../commons/Hooks";
import { Pokemons } from "../../services/Pokemons";
import { Header } from "../Header/index";

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
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        setPokemons(data);
    }, [data]);

    const onDataChange = (value) => {

        if (value.length < 1) {
            setPokemons(data);
            return;
        };

        const filterdData = data.filter(poke => poke.name.toLowerCase().startsWith(value.toLowerCase()));
        setPokemons(filterdData)
    };

    return (
        <div style={container}>
            <Header onDataChange={onDataChange}></Header>
            {!isLoading && pokemons.map((pokemon) =>
                <div key={pokemon._id}>
                    <Pokemon pokemon={pokemon} />
                </div>)
            }
        </div>
    );
};

export default Main;
