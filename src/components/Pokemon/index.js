import React from 'react';

import {Card, Container, Nome} from './styles';
import {Label} from "../Label";
import Utils from "../../commons/Utils";
import {Link} from "react-router-dom";
import {useFetch} from "../../commons/hooks";
import {Pokemons} from "../../services/Pokemons";


const LinkStyle = {
  textDecoration: 'none'
};

/**
 * that's component create the pokemon card for see in window
 */
export const Pokemon = ({pokemon}) => {
    const [data, isLoading] = useFetch(pokemon.url);

    return (
        <div>
            {!isLoading && <Container>
                    <Link to={Pokemons.searchPoke(data.id)} style={LinkStyle}>
                        <Card>
                            <img src={data.sprites.front_default} alt="pokemon-img"/>

                            <Label types={data.types}/>

                            <Nome>
                                {Utils.capitalizeFirstLetter(data.name)}
                            </Nome>
                        </Card>
                    </Link>
                </Container>
            }
        </div>
    );
};
