import React from 'react';
import { Route } from 'react-router-dom';

import { Btn, Container } from "./styles";

const Button = (props) => (
    <Route render={({ history }) => (
        <Container>
            <Btn type='button' action={props.action} onClick={() => {
                history.push('/pokemon/add')
            }}>
                {props.action}
            </Btn>
        </Container>

    )} />
);

export default Button;