import React, { useState } from 'react';

import { Container, Input } from './styles';

const Filtro = (props) => {

    const [values, setValues] = useState({ filter: '', });

    function searchPokemon(e){
        const { name, value } = e.target
        setValues({ ...values, [name]: value });

        props.onDataChange(value);
    }

    return (
        <Container>
            <Input type="text"
                name="filter"
                value={values.filter}
                onChange={searchPokemon}
                placeholder="Search for pokemons">
            </Input>
        </Container>
    );

}

export default Filtro;