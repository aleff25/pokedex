import React, { useState } from 'react';

import api from '../../../services/api';
import { Labels } from '../../../commons/Labels';
import { Link } from 'react-router-dom';
import { Container, InputName, Select, Label, ButtonBack, ButtonAdd, Footer } from './styles';

/**
 * Component to add a new pokemon
 */
const Add = () => {

    const [values, setValues] = useState({ name: '', types: 'fire', image: '' });

    const handleImageChange = e => {
        setValues({ ...values, image: e.target.files[0] })
    };

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    };

    const Adicionar = async (e) => {
        e.preventDefault();
        const { name, types, image } = values;

        if (!name || !types) return;

        const moves = [types];
        await api.post('pokemon', { name, moves, image });
    };

    function showTypes() {
        let options = [];

        for (const type of Object.entries(Labels)) {
            options.push(type[1].nome)
        }

        return options;
    };

    return (
        <Container onSubmit={Adicionar} >


            <Label>Nome</Label>
            <InputName name="name"
                onChange={handleInputChange}
                value={values.name}>

            </InputName>

            <Label>Tipo</Label>
            <Select name="types"
                onChange={handleInputChange}
                value={values.name}>
                {showTypes().map(option => (
                    <option key={option}>{option}</option>
                ))}
            </Select>

            <Label>Imagem</Label>
            <input type="file"
                name="image"
                onChange={handleImageChange} />

            <Footer>
                <Link to="/">
                    <ButtonBack>Voltar</ButtonBack>
                </Link>
                <ButtonAdd type="submit">Adicionar</ButtonAdd>
            </Footer>

        </Container>
    );

}

export default Add;
