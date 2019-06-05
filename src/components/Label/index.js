import React from 'react';

import {Container, Nome, Span} from "./styles";

/**
 * creates a label containing the type of pokemons
 */
export const Label = ({types}) => {

    return (
        <Container>
            {types.map( (t, index) =>

                <div key={index}>
                    <Span type={t.type}>
                        <Nome>{t.type.name}</Nome>
                    </Span>
                </div>
            )}
        </Container>
    );
};