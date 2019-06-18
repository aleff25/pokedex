import React from 'react';

import Utils from "../../commons/Utils";
import { useFetch } from "../../commons/Hooks";
import { Pokemons } from "../../services/Pokemons";

import { Attribute, Body, BodyMoves, Container, Label, Header, List, Name } from "./styles";

/**
 * Details of pokemons, contains information and abilities of pokemon passed for component
 */
const Details = (props) => {

    const [data, isLoading] = useFetch(Pokemons.searchPoke(props.match.params.id));

    const nextEvolutions = () => {
        if (data.next_evolutions !== undefined && data.next_evolutions.length > 0) {

            return data.next_evolutions;
        }

        return [];
    }

    const prevEvolutions = () => {
        if (data.previous_evolutions !== undefined && data.previous_evolutions.length > 0) {

            return data.previous_evolutions;
        }

        return [];
    }


    function hasEvolutions() {
        return data.next_evolutions !== undefined || data.previous_evolutions !== undefined
    }

    return (
        <div>
            {
                !isLoading ? (
                    <Container>
                        <Header>
                            <Name> {Utils.capitalizeFirstLetter(data.name)} </Name>
                            <img src={`/images/${data.name.toLowerCase()}.png`} alt="pokemon-details" style={{ width: 200 }} />
                        </Header>

                        <Body>

                            {hasEvolutions() && (
                                <div>
                                    <Label>
                                        <Attribute> Evolutions </Attribute>
                                    </Label>
                                    <List>
                                        {prevEvolutions().map(prv => (
                                            <div key={prv._id}>

                                                <img src={`/images/${prv.name}.png`} alt="pokemon-next-evolutions" style={{ width: 130 }} />
                                            </div>
                                        ))}

                                        {nextEvolutions().map(nxt => (
                                            <div key={nxt._id}>

                                                <img src={`/images/${nxt.name}.png`} alt="pokemon-next-evolutions" style={{ width: 130 }} />
                                            </div>
                                        ))}
                                    </List>
                                </div>
                            )}

                            <Label>
                                <Attribute> Attacks </Attribute>
                            </Label>
                            <List>
                                {data.fast_attacks.map(attack => (
                                    <BodyMoves key={attack.name}>
                                        {attack.name}
                                    </BodyMoves>
                                ))}
                            </List>

                            <Label>
                                <Attribute> Special Attaks </Attribute>
                            </Label>
                            <List>
                                {data.special_attacks.map(special => (
                                    <BodyMoves key={special.name}>
                                        {special.name}
                                    </BodyMoves>
                                ))}
                            </List>
                        </Body>

                    </Container>)

                    : <div> Loading </div>
            }
        </div>
    );

};

export default Details;