import React from 'react';

import { Card, Container, Nome } from './styles';
import { Label } from "../../container/Label";
import Utils from "../../commons/Utils";
import { Link } from "react-router-dom";
import { Pokemons } from "../../services/Pokemons";


const LinkStyle = {
    textDecoration: 'none'
};

/**
 * that's component create the pokemon card for see in window
 */
export const Pokemon = ({ pokemon }) => {

    return (
        <Container>

            <Link to={Pokemons.searchPoke(pokemon._id)} style={LinkStyle}>
                <Card>
                    <img src={`images/${pokemon.name.toLowerCase()}.png`}  alt="pokemon-img"  style={{ width: 130}}/>

                    <Label types={pokemon.types} />

                    <Nome>
                        {Utils.capitalizeFirstLetter(pokemon.name)}
                    </Nome>
                </Card>
            </Link>
        </Container>

    );
};
