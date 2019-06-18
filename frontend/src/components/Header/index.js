import React from 'react';

import { Container } from './styles';

import Button from "../../container/Button";
import Filtro from "../../container/Filtro";

import { ADD } from '../../commons/ActionButton';
import { Pokemons } from '../../services/Pokemons';

export const Header = (props) => {

    return (

        <Container>
            <Button action={ADD} onClick={Pokemons.addNewPokemon()}>

            </Button>
            <Filtro onDataChange={props.onDataChange}></Filtro>
        </Container>

    );

};
