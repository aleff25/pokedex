import styled from 'styled-components';

export const Container = styled.div`
    margin: 5px 30px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    max-width: 200px;
    width: 200px;
    height: 200px
    background-color: #ffffff;
    &:hover {
        cursor: pointer;
        opacity: 0.7
    }
    &:link {
        text-decoration: none;
    }
`;

export const Nome = styled.h1`
    font-size: 22px;
    color: black;
    margin-top: 10px;
    padding: 10px;
`;