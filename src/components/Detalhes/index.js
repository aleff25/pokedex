import React from 'react';

import {useFetch} from "../../commons/hooks";
import {Ability, Body, BodyMoves, Container, ContainerAbility, Header, List, Name} from "./styles";
import Utils from "../../commons/Utils";
import {Pokemons} from "../../services/Pokemons";

/**
 * Details of pokemons, contains information and abilities of pokemon passed for component
 */
const Details = (props) => {

    const [data, isLoading] = useFetch(Pokemons.searchPoke(props.match.params.id));
    console.log(data);
    return (
        <>
            {
                !isLoading ? (
                        <Container>

                            <Header>
                                <Name> { Utils.capitalizeFirstLetter(data.name) } </Name>
                                <img style={{width: 200}} src={data.sprites.front_default} alt="pokemon-img"/>
                            </Header>

                            <Body>
                            <ContainerAbility>
                                <Ability> Abilities </Ability>
                            </ContainerAbility>
                            <List>
                                {data.moves.map(info => (
                                    <BodyMoves key={info.move.name}>
                                        {info.move.name}
                                    </BodyMoves>
                                ))}
                            </List>
                            </Body>

                        </Container>)

                    : <div> Loading </div>
            }
        </>
    );

};

export default Details;