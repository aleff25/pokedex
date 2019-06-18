import styled from 'styled-components';

export const Container = styled.form`
    width: 100%;
    max-width: 580px;
    margin: 30px auto 0;
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;

    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    font-weight: bold;
    margin: 10px 0 0 10px;
`;

export const InputName = styled.input`
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
`;

export const ButtonBack = styled.button`
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background: #da471b;
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;

export const ButtonAdd = styled.button`
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background: #7159c1;
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;

export const Select = styled.select`
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;
